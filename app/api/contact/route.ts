import {NextRequest, NextResponse} from "next/server";

const recipient = process.env.CONTACT_EMAIL ?? "cuongnm003@gmail.com";
const formSubmitEndpoint = `https://formsubmit.co/ajax/${recipient}`;
const windowMs = 10 * 60 * 1000;
const maxRequestsPerWindow = 5;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimits = new Map<string, RateLimitEntry>();

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isRateLimited(identifier: string) {
  const now = Date.now();
  const current = rateLimits.get(identifier);

  if (!current || current.resetAt <= now) {
    rateLimits.set(identifier, {count: 1, resetAt: now + windowMs});
    return false;
  }

  if (current.count >= maxRequestsPerWindow) {
    return true;
  }

  current.count += 1;
  return false;
}

export async function POST(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const identifier = forwardedFor?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(identifier)) {
    return NextResponse.json({success: false}, {status: 429});
  }

  try {
    const body = (await request.json()) as Record<string, unknown>;
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const website = typeof body.website === "string" ? body.website.trim() : "";

    // Silently accept submissions filled by bots so the honeypot is not exposed.
    if (website) {
      return NextResponse.json({success: true});
    }

    if (
      name.length < 2 ||
      name.length > 100 ||
      !isValidEmail(email) ||
      email.length > 254 ||
      message.length < 10 ||
      message.length > 5000
    ) {
      return NextResponse.json({success: false}, {status: 400});
    }

    const response = await fetch(formSubmitEndpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `New portfolio message from ${name}`,
        _template: "table",
        _captcha: "false",
        _url: request.headers.get("origin") ?? request.nextUrl.origin,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json({success: false}, {status: 502});
    }

    const result = (await response.json()) as {success?: boolean | string};
    if (result.success === false || result.success === "false") {
      return NextResponse.json({success: false}, {status: 502});
    }

    return NextResponse.json({success: true});
  } catch {
    return NextResponse.json({success: false}, {status: 500});
  }
}

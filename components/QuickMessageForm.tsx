"use client";

import {useState, type FormEvent} from "react";

type Props = {
  labels: {
    title: string;
    description: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
    privacy: string;
    success: string;
    error: string;
  };
};

type Status = "idle" | "submitting" | "success" | "error";

const fieldClassName =
  "mt-2 w-full rounded-2xl border border-border/80 bg-background/70 px-4 py-3.5 text-foreground outline-none transition placeholder:text-muted/60 focus:border-brand focus:ring-4 focus:ring-brand/10";

export default function QuickMessageForm({labels}: Props) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const website = String(formData.get("website") ?? "").trim();

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name, email, message, website}),
      });

      if (!response.ok) {
        throw new Error("Unable to send message");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/60 p-6 shadow-xl shadow-brand/5 backdrop-blur-sm md:p-8">
      <div
        aria-hidden
        className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-brand/15 blur-3xl"
      />

      <div className="relative">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/15 text-brand">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
            aria-hidden
          >
            <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" />
            <path d="M8 9h8M8 13h5" />
          </svg>
        </div>
        <h2 className="mt-5 text-2xl font-bold tracking-tight">{labels.title}</h2>
        <p className="mt-2 leading-relaxed text-muted">{labels.description}</p>

        <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
          <div className="absolute -left-[9999px]" aria-hidden>
            <label htmlFor="quick-message-website">Website</label>
            <input
              id="quick-message-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="quick-message-name" className="text-sm font-semibold">
              {labels.name}
            </label>
            <input
              id="quick-message-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder={labels.namePlaceholder}
              className={fieldClassName}
            />
          </div>

          <div>
            <label htmlFor="quick-message-email" className="text-sm font-semibold">
              {labels.email}
            </label>
            <input
              id="quick-message-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder={labels.emailPlaceholder}
              className={fieldClassName}
            />
          </div>

          <div>
            <label htmlFor="quick-message-content" className="text-sm font-semibold">
              {labels.message}
            </label>
            <textarea
              id="quick-message-content"
              name="message"
              rows={6}
              required
              placeholder={labels.messagePlaceholder}
              className={`${fieldClassName} resize-y`}
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            aria-busy={status === "submitting"}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-foreground px-5 py-3.5 font-semibold text-background shadow-lg transition hover:-translate-y-0.5 hover:bg-brand hover:text-slate-950 hover:shadow-brand/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/30 disabled:cursor-wait disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {status === "submitting" ? labels.submitting : labels.submit}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </button>

          <p className="text-center text-xs leading-relaxed text-muted">
            {labels.privacy}
          </p>
          <p
            aria-live="polite"
            className={`text-center text-sm font-medium ${
              status === "error" ? "text-red-500" : "text-emerald-600 dark:text-emerald-400"
            }`}
          >
            {status === "success" ? labels.success : status === "error" ? labels.error : ""}
          </p>
        </form>
      </div>
    </div>
  );
}

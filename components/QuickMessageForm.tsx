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

const formSubmitEndpoint =
  "https://formsubmit.co/ajax/cuongnm003@gmail.com";

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
          _honey: website,
          _url: window.location.href,
        }),
      });

      const result = (await response.json()) as {
        success?: boolean | string;
      };

      if (
        !response.ok ||
        result.success === false ||
        result.success === "false"
      ) {
        throw new Error("Unable to send message");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="card p-6 lg:p-8">
      <h2 className="t-h3">{labels.title}</h2>

      <form className="relative mt-6 space-y-5" onSubmit={handleSubmit}>
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
          <label htmlFor="quick-message-name" className="t-label">
            {labels.name}
          </label>
          <input
            id="quick-message-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder={labels.namePlaceholder}
            className="field"
          />
        </div>

        <div>
          <label htmlFor="quick-message-email" className="t-label">
            {labels.email}
          </label>
          <input
            id="quick-message-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder={labels.emailPlaceholder}
            className="field"
          />
        </div>

        <div>
          <label htmlFor="quick-message-content" className="t-label">
            {labels.message}
          </label>
          <textarea
            id="quick-message-content"
            name="message"
            rows={6}
            required
            placeholder={labels.messagePlaceholder}
            className="field resize-y"
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          aria-busy={status === "submitting"}
          className="btn btn--primary w-full"
        >
          {status === "submitting" ? labels.submitting : labels.submit}
        </button>

        <p className="t-small text-muted">{labels.privacy}</p>
        <p
          aria-live="polite"
          className={`t-small font-medium ${
            status === "error" ? "text-red-700 dark:text-red-400" : "text-foreground"
          }`}
        >
          {status === "success" ? labels.success : status === "error" ? labels.error : ""}
        </p>
      </form>
    </div>
  );
}

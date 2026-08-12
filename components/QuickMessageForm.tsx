"use client";

import {useState, type FormEvent} from "react";

type Props = {
  recipient: string;
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
    privacy: string;
    opened: string;
    subjectPrefix: string;
  };
};

const fieldClassName =
  "mt-2 w-full rounded-2xl border border-border/80 bg-background/70 px-4 py-3.5 text-foreground outline-none transition placeholder:text-muted/60 focus:border-brand focus:ring-4 focus:ring-brand/10";

export default function QuickMessageForm({recipient, labels}: Props) {
  const [opened, setOpened] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = `${labels.subjectPrefix} — ${name}`;
    const body = `${labels.name}: ${name}\n${labels.email}: ${email}\n\n${message}`;
    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setOpened(true);
    window.location.href = mailto;
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
            className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-foreground px-5 py-3.5 font-semibold text-background shadow-lg transition hover:-translate-y-0.5 hover:bg-brand hover:text-slate-950 hover:shadow-brand/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/30"
          >
            {labels.submit}
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
          <p aria-live="polite" className="text-center text-sm font-medium text-brand">
            {opened ? labels.opened : ""}
          </p>
        </form>
      </div>
    </div>
  );
}

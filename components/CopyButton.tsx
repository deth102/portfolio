"use client";

import { useEffect, useState } from "react";

export default function CopyButton({
  text,
  labels,
}: {
  text: string;
  labels: { copy: string; copied: string };
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(id);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      // Clipboard blocked (e.g. insecure context): the text stays selectable.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="rounded-full border border-border/70 px-3 py-1 text-xs font-medium text-foreground/80 transition-colors hover:border-brand/60 hover:text-brand"
    >
      <span aria-live="polite">{copied ? labels.copied : labels.copy}</span>
    </button>
  );
}

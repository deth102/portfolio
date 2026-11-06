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
      className="btn btn--secondary btn--sm"
    >
      <span aria-live="polite">{copied ? labels.copied : labels.copy}</span>
    </button>
  );
}

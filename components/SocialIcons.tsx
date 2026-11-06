import {
  person,
  personalProfiles,
  professionalProfiles,
} from "@/data/profile";

type IconLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
  // Professional profile of the site owner → rel="me" (identity signal).
  me?: boolean;
};

const links: IconLink[] = [
  {
    href: professionalProfiles.github,
    label: "GitHub",
    me: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.16c-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.74-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.19 1.18a11 11 0 0 1 5.81 0c2.22-1.49 3.19-1.18 3.19-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.44-2.7 5.41-5.27 5.69.41.36.78 1.06.78 2.13v3.16c0 .3.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
      </svg>
    ),
  },
  {
    href: personalProfiles.facebook,
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99C18.34 21.12 22 17 22 12z" />
      </svg>
    ),
  },
  {
    href: personalProfiles.instagram,
    label: "Instagram",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    href: professionalProfiles.linkedin,
    label: "LinkedIn",
    me: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.71h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.36c0-1.28-.02-2.93-1.79-2.93-1.79 0-2.07 1.4-2.07 2.84V21H9z" />
      </svg>
    ),
  },
  {
    href: `mailto:${person.email}`,
    label: "Email",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    href: professionalProfiles.googleScholar,
    label: "Google Scholar",
    me: true,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M2.5 9 12 4l9.5 5L12 14 2.5 9Z" />
        <path d="M6.5 11.2V16c2.8 2.4 8.2 2.4 11 0v-4.8" />
        <path d="M21.5 9v6" />
      </svg>
    ),
  },
  {
    href: professionalProfiles.researchGate,
    label: "ResearchGate",
    me: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M5 3h7.2c3.8 0 6.1 2 6.1 5.2 0 2.2-1.1 3.8-3.1 4.6L19.5 21h-4.1l-3.8-7.4H8.7V21H5V3Zm3.7 3.1v4.5h3.1c1.8 0 2.8-.8 2.8-2.3s-1-2.2-2.8-2.2H8.7Z" />
        <circle cx="19.5" cy="4.5" r="2.5" />
      </svg>
    ),
  },
  {
    href: professionalProfiles.orcid,
    label: "ORCID",
    me: true,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <circle cx="12" cy="12" r="9.5" />
        <path d="M7.6 10.5v6" />
        <circle cx="7.6" cy="7.6" r="0.5" fill="currentColor" />
        <path d="M10.6 7.5v9h2a4.5 4.5 0 0 0 0-9h-2Z" />
      </svg>
    ),
  },
];

export default function SocialIcons() {
  return (
    <ul className="flex flex-wrap items-center gap-3 sm:gap-5">
      {links.map((l) => (
        <li key={l.label}>
          <a
            href={l.href}
            target="_blank"
            rel={l.me ? "me noreferrer noopener" : "noreferrer noopener"}
            aria-label={l.label}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-foreground/70 hover:text-brand hover:border-brand/60 transition-colors"
          >
            {l.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}

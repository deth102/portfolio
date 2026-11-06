import { selfAuthor } from "@/data/research";

// Comma-separated author names with the site owner highlighted.
export default function AuthorList({ authors }: { authors: string[] }) {
  return (
    <>
      {authors.map((a, i) => (
        <span key={a}>
          {i > 0 && ", "}
          {a === selfAuthor ? (
            <span className="font-semibold text-foreground">{a}</span>
          ) : (
            a
          )}
        </span>
      ))}
    </>
  );
}

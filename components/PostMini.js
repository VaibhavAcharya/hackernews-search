import Link from "next/link";

export default function PostMini({ objectID, title, story_title, author, ...props }) {
  return (
    <a href={`/p/${objectID}`}>
      <article className="flex col items-stretch justify-start gap-sm">
        <h2>{ title }</h2>
        <p className="text-secondary">
          <small>
            By { author }
          </small>
        </p>
      </article>
    </a>
  );
}

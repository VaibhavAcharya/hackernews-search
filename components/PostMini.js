export default function PostMini({
  objectID,
  title,
  url,
  author,
  points,
  ...props
}) {
  return (
    <a href={`/p/${objectID}`}>
      <article className="flex col items-stretch justify-start gap-sm">
        <h2>{title}</h2>
        <p>
          <small>
            <a href={`${url}`} className="text-anchor">
              {url}
            </a>
          </small>
        </p>
        <p className="text-secondary">
          <small>By {author}</small>
        </p>
        <p className="text-special">{points} points</p>
      </article>
    </a>
  );
}

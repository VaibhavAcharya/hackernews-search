export default function PostMini({
  objectID,
  title,
  url,
  author,
  points,
  num_comments,
  ...props
}) {
  return (
    <a href={`/p/${objectID}`}>
      <article className="flex col items-stretch justify-start gap-sm">
        <h2>{title}</h2>
        <p className="text-secondary">
          <small>By {author}</small>
        </p>
        <p className="text-special">
          {points} points & {num_comments} comments
        </p>
      </article>
    </a>
  );
}

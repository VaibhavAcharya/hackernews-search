import getDateDistance from "./../utils/getDateDistance";

export default function Comment({ id, created_at, author, text, points, ...props }) {
  console.log(props, points)

  return (
    <article className="flex col items-stretch justify-start gap-sm">
      <p>
        <small>
          By { author }
          <br />
          { getDateDistance(created_at) }
        </small>
      </p>
      <p className="text-special">{points} points</p>
      <p>
        { text }
      </p>
      <section  className="flex col items-stretch justify-start gap-sm">
        {
          props.children.map(function (comment) {
            return (<Comment key={comment.id} { ...comment } />);
          })
        }
      </section>
    </article>
  );
}

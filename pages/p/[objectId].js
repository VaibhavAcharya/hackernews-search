import getDateDistance from "./../../utils/getDateDistance";

import Comment from "../../components/Comment";

export async function getServerSideProps(context) {
  const targetObjectId = context.params.objectId;

  try {
    const response = await fetch(
      `http://hn.algolia.com/api/v1/items/${targetObjectId}`,
      {
        method: "GET",
      }
    );

    const post = await response.json();

    return {
      props: {
        post,
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
}

export default function PostById({ post }) {
  return (
    <main className="flex col items-stretch justify-start gap-md">
      <h1>{post.title}</h1>
      <p>
        <small>
          <a
            href={`${post.url}`}
            target="_blank"
            rel="noopener"
            className="text-anchor"
          >
            {post.url}
          </a>
        </small>
      </p>
      <p className="text-secondary">
        By {post.author}
        <br />
        <small>{getDateDistance(post.created_at)}</small>
      </p>
      <p className="text-special">{post.points} points</p>
      <p>{post.text}</p>
      <section className="flex col items-stretch justify-start gap-sm">
        <h3>Comments</h3>
        {post.children.map(function (comment) {
          return <Comment key={comment.id} {...comment} />;
        })}
      </section>
    </main>
  );
}

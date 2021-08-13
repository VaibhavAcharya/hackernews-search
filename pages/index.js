import { useCallback, useRef, useState } from "react";

import SearchIcon from "../components/icons/SearchIcon";
import FlashIcon from "../components/icons/FlashIcon";

import PostMini from "../components/PostMini";

function StatusText({ children }) {
  return (
    <p className="text-special flex row items-stretch justify-center">
      {children}
    </p>
  );
}

export default function Home() {
  const searchInputRef = useRef(null);

  const [isFetching, setIsFetching] = useState(false);
  const [posts, setPosts] = useState([]);

  const search = useCallback(async function (event) {
    event.preventDefault();
    const query = searchInputRef.current.value;

    setIsFetching(true);

    try {
      const response = await fetch(
        `https://hn.algolia.com/api/v1/search?query=${query}`,
        {
          method: "GET",
        }
      );
      const newPosts = (await response.json()).hits;

      setPosts(newPosts);
    } catch (error) {
      console.log("Error: ", error);
      setPosts(undefined);
    }

    setIsFetching(false);
  }, []);

  return (
    <main>
      <form className="pb-lg flex row-warp items-stretch justify-center gap-md">
        <input
          ref={searchInputRef}
          id="search"
          type="text"
          placeholder="Type your search query here..."
          disabled={isFetching}
        />
        <button
          type="submit"
          onClick={search}
          className="flex row items-center justify-center"
          disabled={isFetching}
        >
          <span className="sr-only">Search</span>

          {isFetching ? <FlashIcon size={24} /> : <SearchIcon size={24} />}
        </button>
      </form>

      <section className="flex col items-stretch justify-start gap-md">
        {isFetching ? (
          <StatusText>🤞 Fetching posts...</StatusText>
        ) : posts === undefined ? (
          <StatusText>😢 Some error happened!</StatusText>
        ) : posts.length < 1 ? (
          <StatusText>✨ Start searching to get results here...</StatusText>
        ) : (
          posts.map(function (post) {
            return <PostMini key={post.objectId} {...post} />;
          })
        )}
      </section>
    </main>
  );
}

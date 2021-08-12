import { useCallback, useRef, useState } from "react";
import useSWR from "swr";
import SearchIcon from "../components/icons/SearchIcon";
import PostMini from "../components/PostMini";

export default function Home() {
  const searchInputRef = useRef(null);

  const [isFetching, setIsFetching] = useState(false);
  const [posts, setPosts] = useState([]);

  const search = useCallback(async function (event) {
    event.preventDefault();
    const query = searchInputRef.current.value;

    setIsFetching(true);

    try {
      const response = await fetch(`http://hn.algolia.com/api/v1/search?query=${query}`, {
        method: "GET"
      });
      const newPosts = (await response.json()).hits;

      setPosts(newPosts);
    } catch (error) {
      console.log("Error: ", e);
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
        <button type="submit" onClick={search} className="flex row items-center justify-center" disabled={isFetching}>
          <span className="sr-only">Search</span>

          <SearchIcon size={24} />
        </button>
      </form>

      <section className="flex col items-stretch justify-start gap-md">
        {
          posts === undefined ? "Some error happened!" : (
            posts.length < 1 ? (
              <p className="text-secondary flex row items-stretch justify-center">Start searching to get results here...</p>
            ) : (
              posts.map(function (post) {
                return (
                  <PostMini key={post.objectId} { ...post } />
                );
              })
            )
          )
        }
      </section>
    </main>
  );
}

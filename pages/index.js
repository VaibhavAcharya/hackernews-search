export default function Home() {
  return (
    <main>
      <section>
        <form>
          <input id="search" placeholder="Type your search query here..." />
          <button type="submit">
            <span>Search</span>
          </button>
        </form>
      </section>

      <section>{/* Posts */}</section>
    </main>
  );
}

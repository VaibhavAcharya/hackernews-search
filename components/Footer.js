export function Footer() {
  return (
    <footer className="pt-lg flex row items-center justify-center text-align-center">
      <p className="text-secondary">
        <small>
          Created By{" "}
          <a
            href="https://vaibhavacharya.github.io/"
            target="_blank"
            rel="noopener"
            className="text-anchor"
          >
            Vaibhav Acharya
          </a>
          .
          <br />
          Using{" "}
          <a
            href="https://hn.algolia.com/api"
            target="_blank"
            rel="noopener"
            className="text-anchor"
          >
            HN Search API
          </a>
          .
        </small>
      </p>
    </footer>
  );
}

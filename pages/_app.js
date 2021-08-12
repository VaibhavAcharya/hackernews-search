import Head from "next/head";

function _App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>HackerNews Search</title>
        <meta
          name="description"
          content="Web App to search HackerNews posts easily."
        />
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </Head>

      <header>
        <span>
          {/* <img /> */}
          HackerNews Search
        </span>
      </header>

      <Component {...pageProps} />
    </>
  );
}

export default _App;

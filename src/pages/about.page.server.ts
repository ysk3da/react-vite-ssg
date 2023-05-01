import fetch from "node-fetch";
// import { PageContextServer } from "../types";

export { onBeforeRender };

// async function onBeforeRender(pageContext: PageContextServer) {
  async function onBeforeRender() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/comments/1"
  );
  const comments = await response.json();
  return {
    pageContext: {
      pageProps: { comments },
    },
  };
}

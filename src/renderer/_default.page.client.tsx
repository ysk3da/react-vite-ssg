import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import type { PageContextClient } from "../types";

export { render };

let root: ReactDOM.Root;

function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext;

  // 画面は Page として取得できる。pageProps には SSG
  // 実施時に事前取得した情報を含む
  // 後述するが、今回は pagePrps: { comments }
  const page = (
    <React.StrictMode>
      <Page {...pageProps} />
    </React.StrictMode>
  );

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const container: HTMLElement = document.getElementById("page-view")!;
  // アクセス初回時は hydration する
  if (pageContext.isHydration) {
    root = ReactDOM.hydrateRoot(container, page);
  } else {
    // 以下は 公式のサンプルにあったが必要なのかは不明。今回の検証においてはコメントアウトしても問題なし
    // if (!root) {
    //   root = ReactDOM.createRoot(container)
    // }

    // 初期画面表示後、クライアント側でのルーティング時にはこちらが呼ばれる
    root.render(page);
  }
}

// クライアント側でのルーティングをする際には必要
export const clientRouting = true;

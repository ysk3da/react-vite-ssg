# development memo

## プラグインのインストール

```sh
npm i -D vite-plugin-ssr
```

## SSG を行うための変更

### vite.config.ts

公式にあるように ssr({ prerender: true })を追加します。Pre−rendering でない場合は ssr() のみでよさそうです。

```ts
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import ssr from 'vite-plugin-ssr/plugin'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), ssr({ prerender: true })],
})
```

### _default.page.client.tsx / _default.page.server.tsx

[公式の react-tour](https://vite-plugin-ssr.com/react-tour) に様々な方法が書かれているので詳細はそちらを見るのがよいですが、基本形としては、

ページは .page.tsx とする。Next.js みたいにフォルダ構成をもとにルーティングされる。
ブラウザのみで実行するものは .page.client.tsx
Node.js のみで実行するものは .page.server.tsx
すべてのページにデフォルトで適用するには、以下を用意する。
/renderer/_default.page.client.js
/renderer/_default.page.server.js
エラー発生時は _error.page.tsx
とのこと。以下のような構成になります。今回は /about アクセス時にのみ、事前処理を追加するため about.page.server.ts を用意しています。


## 起動する

```sh
serve dist/client
```

## References

[Vite + React で SSG する（vite-plugin-ssr 利用した最小構成）](https://kasyalog.site/blog/vite-react-ssg-with-vite-plugin-ssr/)
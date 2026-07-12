# STRIDE — Nike Onboarding Demo (EC Site)

Figma Dev Mode MCP Server の「Code ↔ Canvas roundtrip」デモ用に構築した、
簡易的なEC風ウェブサイトです。見た目の作り込みよりも、デザインシステムと
してのトークン構造・コンポーネント構造の明確さを優先しています。

## 技術スタック

- Vite + React + TypeScript
- Tailwind CSS v3(`tailwind.config.js` の `theme.extend` から
  `src/styles/tokens.css` の CSS変数を参照する構成)
- 外部UIライブラリなし(すべて自前コンポーネント)

## セットアップ

```bash
npm install
npm run dev
```

`http://localhost:5173` でアプリが起動します。

```bash
npm run build   # 本番ビルド
npm run preview # ビルド結果のプレビュー
```

## ディレクトリ構成

```
src/
  styles/
    tokens.css        # デザイントークン(CSS変数)。Figma variables との対応表つき
  components/
    Button.tsx         # variant: primary/secondary, size: md/lg
    ProductCard.tsx     # 画像・商品名・カテゴリ・価格・Button(★roundtripデモの主役)
    Header.tsx           # ロゴ(STRIDE)・ナビ3リンク・カートアイコン
    Hero.tsx              # 見出し・サブコピー・CTA Button
    ProductGrid.tsx        # ProductCard を4枚グリッド表示
  data/
    products.ts        # スニーカー4商品のモックデータ(placehold.co の画像)
  App.tsx               # Header → Hero → ProductGrid の1ページ構成
```

## デザイントークンについて

`src/styles/tokens.css` に `--color-brand-primary` のような命名で
CSS変数を定義しています。Figma variables の `color/brand/primary` のような
パス形式の名前と、`/` を `-` に変換した1対1対応になっています。
ファイル冒頭に対応表をコメントで記載しているので、Figma 側の variables
パネルと突き合わせて確認できます。

`tailwind.config.js` はこれらのCSS変数を `theme.extend` 経由で参照して
おり、コンポーネント側では `bg-brand-primary` や `text-text-secondary`、
`p-md`、`rounded-md` のような Tailwind ユーティリティクラスとして
使用します。色・余白・角丸・フォントサイズのハードコードはありません。

## Figma MCP デモでの使い方メモ

- **主役コンポーネントは `ProductCard.tsx`。** roundtrip実演では、この
  コンポーネントを選択して Figma 側でデザイン変更 → コードに反映、
  またはコードを変更 → Figma 側の auto layout に反映、という双方向の
  やり取りを行うことを想定しています。
- `ProductCard` の内部構造(`ProductCard-Image` / `ProductCard-Body` /
  `ProductCard-Category` / `ProductCard-Name` / `ProductCard-Price` /
  `ProductCard-Action` のような命名の div)は、Figma の frame / auto
  layout のレイヤー名と対応させやすいように、シンプルな縦積み
  flexbox 構成にしています。
- 色・スペーシング・角丸・フォントサイズはすべて `tokens.css` の
  CSS変数経由なので、Figma variables を変更してコード側に同期する
  デモでも、変数名のマッピングだけで説明できます。
- 他のコンポーネント(`Header`, `Hero`, `Button`)も同様に、
  `ComponentName-PartName` の命名規則で構造化しているため、
  Figma のレイヤーパネルとコードのJSX構造を並べて説明しやすくなって
  います。

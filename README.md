# heiwa4126-cow1 (@heiwa4126/cow1)

[![npm version](https://img.shields.io/npm/v/@heiwa4126/cow1.svg)](https://www.npmjs.com/package/@heiwa4126/cow1)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green.svg)](https://nodejs.org/)

TypeScript でパッケージ書いて
EMS と CJS にするプロジェクトの練習。主に外部依存のテスト

中身は
[cowsay - npm](https://www.npmjs.com/package/cowsay#usage-as-a-module)
をラップしただけで意味は無い。

## インストール

```sh
npm install @heiwa4126/cow1
```

## 実行例

```console
$ heiwa4126-cow1 'There is nothing either good or bad,\nbut thinking makes it so.'
 ______________________________________
/ There is nothing either good or bad, \
\ but thinking makes it so.            /
 --------------------------------------
        \   ^__^
         \  (oO)\_______
            (__)\       )\/\
             U  ||----w |
                ||     ||
```

(開発ディレクリ内では `npx heiwa4126-cow1` のように実行しましょう)

## API

### `cow(text?: string): string`

指定されたテキストを牛が話す ASCII アートを生成します。

#### パラメータ

- `text` (optional): 牛に話させるテキスト。省略した場合は `"I'm a moooodule"` がデフォルト値として使用されます。

#### 戻り値

- `string`: 牛の ASCII アートとメッセージを含む文字列

#### 使用例

```typescript
import { cow } from "@heiwa4126/cow1";

// デフォルトメッセージ
console.log(cow());

// カスタムメッセージ
console.log(cow("Hello, TypeScript!"));

// マルチラインメッセージ
console.log(cow("Line 1\nLine 2\nLine 3"));
```

### ESM / CommonJS サポート

このパッケージは ESM と CommonJS の両方をサポートしています:

```javascript
// ESM
import { cow } from "@heiwa4126/cow1";

// CommonJS
const { cow } = require("@heiwa4126/cow1");
```

### CLI 使用方法

パッケージをインストールすると、`heiwa4126-cow1` コマンドが利用可能になります:

```bash
# デフォルトメッセージ
heiwa4126-cow1

# カスタムメッセージ
heiwa4126-cow1 "Your message here"

# マルチライン(\nが実際の改行に変換されます)
heiwa4126-cow1 'Line 1\nLine 2'
```

## 開発

はじめかた

```sh
npm run init  # `npm init` ではない
npm run smoketest
```

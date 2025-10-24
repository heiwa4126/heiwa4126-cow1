import { cow } from "./index.js";

// コマンドライン引数の最初の値を取得（node script.js [message] の message 部分）
const message = process.argv[2];

// \n を実際の改行に変換（より使いやすいCLI体験のため）
const processedMessage = message?.replace(/\\n/g, "\n");

console.log(cow(processedMessage));

const isProduction=false
const apiBaseURL=isProduction?"https://codemates.lolitapunk.jp/sns-with-flask":"http://127.0.0.1:5000"
const thisBaseURL=isProduction?"https://codemates.lolitapunk.jp/vite-sns":"/"
export {apiBaseURL,thisBaseURL}
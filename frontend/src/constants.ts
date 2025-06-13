const isProduction=false
const apiBaseURL=isProduction?"https://codemates.lolitapunk.jp/sns-with-flask":"http://127.0.0.1:5000"
const thisBaseURL=isProduction?"/sns-vite/":"/"
export {apiBaseURL,thisBaseURL}
const isProduction=false
const apiBaseURL=isProduction?"https://codemates.lolitapunk.jp/sns-with-flask":"http://127.0.0.1:5000"
const thisBaseURL=isProduction?"/sns-vite/":"/"
const departments=["法学部", "文学部", "経済学部", "社会学部", "経営学部", "国際文化学部", "人間環境学部", "現代福祉学部", "情報科学部", "キャリアデザイン学部", "デザイン工学部", "理工学部", "生命科学部", "グローバル教養学部", "スポーツ健康学部"]
export {apiBaseURL,thisBaseURL,departments}
// 定数dateは関数new　Dateで求める
const date = new Date();
// 定数dateから年、月、日抜き取ってそれぞれの文字列をつなげる配列を作り定数userDateとする
const userDate = [
  date.getFullYear()+"年",date.getMonth()+1+"月",date.getDate()+"日",];
  // 定数userDateをjoin()メソッドで配列の全要素を連結した文字列にする　””にすることで間に何も入れずにつなげる
const re = userDate.join("");　
console.log(re);
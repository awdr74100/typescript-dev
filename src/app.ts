/**
 * TS 會抱怨
 * - 在 JS 這行得通
 */
/*
var a = 10;
if (a >= 10) {
  var b = 20;
}
console.log(b);
*/

/**
 * TS 會抱怨!
 * - 在 JS 確實單個參數能夠省略括號
 * - 在 TS 函式需分配參數類型故始終無法省略括號 (除非像是 addEventListener 可推斷參數類型方法)
 */
/*
const printOutput = output: string => console.log(output);

const btn = document.querySelector(".btn") as HTMLButtonElement;
btn.addEventListener("click", (e) => console.log(e));
*/

/**
 * TS 會抱怨
 * - 剩餘參數必須為陣列類型
 * - 剩餘參數隱含了 any[] 類型
 * - 可明確定義 string[]、number[] 等陣列類型解決錯誤
 * - 可結合 tuple 類型陣列加以限制數量及類型 (等同於設置每個獨立參數及類型，other_0: number...，將失去 ... 應有的靈活性)
 */

/*
const add = (a: number, b: number, ...other: number[]) => {
  return other.reduce((curResult, curValue) => curResult + curValue, 0) + a + b;
};
console.log(add(20, 30));

const add = (a: number, b: number, ...other: [number, string, string]) => {
  return;
};
console.log(add(10, 20, 20, "dw", "sfe"));
*/

type col1 = "A" | "B" | "C";
type col2 = "X" | "Y" | "Z";
const index = { A: 1, B: 2, C: 3, X: 1, Y: 2, Z: 3 };

export default function run(str: string, part: number) {
  let arr = str.trim().split("\n");
  return arr
    .map(funcs[part - 1])
    .reduce((a, b) => a + b, 0)
}
const funcs = [
  function calPoints(col: string) {
    let round = col.split(" ") as (col1 | col2)[];
    let [a1, a2] = round.map((a) => index[a]);
    return a2 + ((a2 - a1 + 4) % 3) * 3;
  },
  function calPoints2(col: string) {
    let round = col.split(" ") as (col1 | col2)[];
    let [a1, a2] = round.map((a) => index[a]);
    return ((a1 + a2) % 3) - 2 + a2 * 3;
  },
];

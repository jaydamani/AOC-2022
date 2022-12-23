const alphabets = Array.from(Array(26)).map((_, i) =>
  String.fromCharCode(i + 97)
);
const priority = [
  "",
  ...alphabets,
  ...alphabets.map((char) => char.toUpperCase()),
];
const sum = (a: number = 0, b: number) => +a + +b;

export default function (input: string, part: number) {
  return parseInput(input, part)
    .map((a) => a.map((e) => new Set(e)))
    .map(([c1, ...c]) =>
      Array.from(c1)
        .filter((e) => c.every((a) => a.has(e)))
        .map((a) => priority.indexOf(a))
        .reduce(sum, 0)
    )
    .reduce(sum, 0);
}

function parseInput(input: string, part: number) {
  const arr = input.split("\n");
  if (part == 1)
    return arr.map((e) => [e.slice(0, e.length / 2), e.slice(e.length / 2)]);
  if (part == 2) return groupBy(arr, 3);
  throw new Error("Part Not implemented");
}

function groupBy<T extends unknown>(arr: T[], num: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += num) {
    result.push(arr.slice(i, i + num));
  }
  return result;
}

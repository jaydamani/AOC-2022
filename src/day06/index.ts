export default function (input: string, part: number) {
  const num = part == 1 ? 4 : 14;
  const arr = Array.from(input);
  return (
    arr
      .map((_, i, arr) => new Set(arr.slice(i, i + num)))
      .findIndex((s) => s.size == num) + num
  );
}

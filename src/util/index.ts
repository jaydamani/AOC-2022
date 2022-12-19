import { mkdirSync, writeFileSync } from "fs";

export * from "./base";

export const formatDay = (day: number | string) =>
  day.toString().padStart(2, "0");

const genTemplate = (part: 1 | 2) => `import { parseInput } from '../util';

const input = parseInput();

// TODO: Complete Part ${part}
`;

export const setupDay = (day: number) => {
  const dir = `./src/day${formatDay(day)}`;
  mkdirSync(dir);
  writeFileSync(`${dir}/input.txt`, "");
  writeFileSync(`${dir}/part1.ts`, genTemplate(1));
  writeFileSync(`${dir}/part2.ts`, genTemplate(2));
};

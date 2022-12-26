import { createInterface, Interface } from "node:readline/promises";

export * from "./base";

export async function getDayAndPart(): Promise<[string, number]> {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  if (process.env.DAY)
    return [
      process.env.DAY.padStart(2, "0"),
      parseInt(process.env.PART ?? "1"),
    ];
  const day = await prompt({
    rl,
    name: "day",
    query: "Enter day to solve:",
    validators: [
      (input) => Number.isInteger(+input) || "Enter an integer",
      (input) => +input >= 1 || "Enter a number greater than 1",
      (input) => +input <= 25 || "Enter a number less than 25",
    ],
  });

  const part = await prompt({
    rl,
    name: "part",
    query: "Enter the part number:",
    validators: [
      (input) => Number.isInteger(+input) || "Enter an integer",
      (input) => +input >= 1 || "Enter a number greater than 1",
      (input) => +input <= 3 || "Enter a number less than 3",
    ],
  });

  rl.close();
  return [day.padStart(2, "0"), parseInt(part)];
}

type validator = (input: string) => string | true;
interface promptOptions {
  name: string;
  query: string;
  validators?: validator[];
  rl: Interface;
}

async function prompt(opts: promptOptions): Promise<string> {
  const input = await opts.rl.question(opts.query + "\n ");
  for (const validator of opts.validators ?? []) {
    const query = validator(input);
    if (query !== true) return await prompt({ ...opts, query });
  }
  return input;
}

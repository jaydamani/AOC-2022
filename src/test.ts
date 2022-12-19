import "module-alias/register";
import { formatDay } from "@utils";

const day = process.env.day ? parseInt(process.env.day) : new Date().getDate();
const part = process.env.part ? parseInt(process.env.part) : 1;

console.log(`Starting test for day ${day} part ${part}`)
console.log('Loading files...')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const run = require(`./day${formatDay(day)}`).default as (
  input: string,
  part: number
) => string;
const test = require(`./day${formatDay(day)}/test`);
const answer = test.answers[part - 1]

// console.log(`Day ${day} | Part ${part} - Solution: ${run(testInput.input, part)}`);
console.log('Starting test...')
console.time('Completed calculation in ')
const res = run(test.input, part)
console.timeEnd('Completed calculation in ')

if(res === answer) console.log(`
Test Passed!!
Answer: ${res}`)
else console.error(`
Test Failed!!
Expected Answer: ${answer}
Calculated Answer: ${res}`)

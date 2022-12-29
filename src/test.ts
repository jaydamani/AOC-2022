import "module-alias/register.js";
import { getDayAndPart } from "@utils";

getDayAndPart().then(([day, part]: [string, number]) => {
	console.log(`Starting test for day ${day} part ${part}`);

	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const run = require(`./day${day}`).default as (
		input: string,
		part: number
	) => string | number;
	const test = require(`./day${day}/test`);
	let answer = test.answers[part - 1] as string | number;

	console.log("Starting test...");

	const start = Date.now();
	const res = run(test.input, part);
	const time = Date.now() - start;

	if (res == answer) {
		console.log("Test Passed!!");
		console.log(`Answer: ${res}`);
		console.log(`Calculated in ${time} ms`);
	} else {
		console.error("Test Failed!!");
		console.error(`Expected Answer: ${answer}`);
		console.error(`Calculated Answer: ${res}`);
	}
});

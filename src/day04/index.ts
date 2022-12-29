export default function (input: string, part: number) {
	return input
		.trim()
		.split("\n")
		.map((a) => a.split(",").map((e) => e.split("-")))
		.filter(filters[part - 1])
		.map((a) => (console.log(a), 1)).length;
}

const filters = [
	(a: string[][]) =>
		a[0][0] === a[1][0] ||
		a[0][1] === a[1][1] ||
		+a[0][0] < +a[1][0] == +a[0][1] > +a[1][1],
	(a: string[][]) =>
		(+a[0][0] <= +a[1][0] && +a[1][0] <= +a[0][1]) ||
		(+a[0][0] <= +a[1][1] && +a[1][1] <= +a[0][1]) ||
		(+a[1][0] <= +a[0][0] && +a[0][0] <= +a[1][1]) ||
		(+a[1][0] <= +a[0][1] && +a[0][1] <= +a[1][1]),
];

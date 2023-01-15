export default function run(str: string, part: number) {
	const max = part === 1 ? 1 : 3;
	return str
		.split('\n\n')
		.map((a) => a.split('\n').reduce((a, b) => +a + +b, 0))
		.reduce(
			(arr, num) => {
				const i = arr.findIndex((a) => a <= num);
				if (i !== -1) {
					arr.splice(i, 0, num);
					if (arr.length > max) arr.pop();
				}
				return arr;
			},
			[0]
		)
		.reduce((a, b) => +a + +b, 0);
}

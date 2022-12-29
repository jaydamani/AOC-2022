import { Base, runbase } from "@utils";
class Day10 extends Base<string[]> {
	_cycle = 0;
	X = 1;
	result = "";
	total = 0;
	signals = [20, 60, 100, 140, 180, 220];

	cycle() {
		let x = this._cycle % 40;
		if (x === 0) this.result += "\n";
		this.draw(x);
		this._cycle++;
		if (this.signals.includes(this._cycle)) this.total += this._cycle * this.X;
	}
	draw(x: number) {
		if (Math.abs(this.X - x) < 2) this.result += "#";
		else this.result += ".";
	}
	run(part: number) {
		for (let op of this.input) {
			this.cycle();
			if (op === "noop") continue;
			this.cycle();
			this.X += +op.replace("addx ", "");
		}
		if (part === 1) return this.total.toString();
		else return this.result;
	}
}

export default runbase(Day10);
/*
##..##..##..##..##..##..##..##..##..##..
###...###...###...###...###...###...###.
####....####....####....####....####....
#####.....#####.....#####.....#####.....
######......######......######......####
#######.......#######.......#######.....
.. 

###..####.#..#.####..##..###..####.####.
#..#.#....#.#.....#.#..#.#..#.#....#....
#..#.###..##.....#..#....#..#.###..###..
###..#....#.#...#...#....###..#....#....
#.#..#....#.#..#....#..#.#....#....#....
#..#.#....#..#.####..##..#....####.#....
..


*/

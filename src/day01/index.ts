export default function(str: string, part: number){
	let max = part == 1 ? 1 : 3
	return str.split('\n\n').map(a => a.split('\n').reduce((a,b) => +a+ +b, 0))
	.reduce(function (arr, num) {
		let i = arr.findIndex(a => a <= num)
		if(i !== -1){ 
			arr.splice(i, 0, num)
			if(arr.length > max) arr.pop()
		}
		return arr
	}, [0]).reduce((a,b) => +a+ +b, 0)
}

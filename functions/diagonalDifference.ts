

// Given a square matrix, calculate the absolute difference between the sums of its diagonals. 

function diagonalDifference(arr: number[][]): number {
  let left=0;
  let right=0;
  let j = arr.length -1
  for(let i=0; i<arr.length;i++){
      left = arr[i][i]+left;
      right = arr[i][j]+right;
      j=j-1;}

  return Math.abs(left-right)
}

let arr:Array<Array<number>> =
		[
			[11, 2, 4],
			[4 , 5, 6],
			[10, 8, -12]
		];
console.log('output:',diagonalDifference(arr))  // eg. 11,5, -12  |  4,5,10   = 15
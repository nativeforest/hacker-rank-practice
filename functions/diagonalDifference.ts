

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
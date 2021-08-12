

// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with

// places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to
// are acceptable.

function plusMinus(arr: number[]): void {
  
  let negativeCount:number=0, positiveCount:number=0, ceroCount:number=0;
  for(let item=0;item<arr.length;item++){
    if(arr[item]<0){negativeCount= negativeCount+1;}
    if(arr[item]>0){positiveCount=positiveCount+1;}
    if(arr[item]==0){ceroCount=ceroCount+1;

  }
}

  positiveCount= positiveCount/arr.length
  negativeCount= negativeCount/arr.length
  ceroCount= ceroCount/arr.length

  console.log (`${positiveCount.toFixed(6)} \n ${negativeCount.toFixed(6)}\n${ceroCount.toFixed(6)}`)
}
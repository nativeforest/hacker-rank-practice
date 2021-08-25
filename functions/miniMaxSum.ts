// Given five positive integers, find the minimum and maximum values that can be 
// calculated by summing exactly four of the five integers. Then print the respective 
// minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr: number[]): void {
  let sum=[]
  for(let position=0;position<arr.length;position++){
      const filteredItems = arr.filter((value, index) => position !== index);
      const total =filteredItems.reduce((a,b)=>a+b);
      sum.push(total);
  }
  
  console.log(`${Math.min(...sum)} ${Math.max(...sum)}`)  

}
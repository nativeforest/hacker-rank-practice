
/*
Given an array of random numbers, Push all the zero’s of a given array to the end of the array...
*/

declare global {
    interface Array<T> {
        moveZerosToEnd(): T[];
    }
}

export {};

const arr:number[] = [1, 2, 0, 4, 3, 0, 5, 0];
  
  Array.prototype.moveZerosToEnd = function ():Array<number> {
    const arr:Array<number> = this;
    let countZeros:number = 0;
    const arrWithZerosEnd:Array<number> = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        arrWithZerosEnd.push(arr[i]);
        continue;
      }
      countZeros++;
    }
    arrWithZerosEnd.push(...Array(countZeros).fill(0));
    return arrWithZerosEnd;
  };
  //Array.prototype.moveZerosToEnd.length
  //polifilling via npm next
  console.log('output: ', arr.moveZerosToEnd());




//js version
// const arr = [1, 2, 0, 4, 3, 0, 5, 0];

// Array.prototype.moveZerosToEnd = function () {
//   const arr = this;
//   let countZeros = 0;
//   const arrWithZerosEnd = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       arrWithZerosEnd.push(arr[i]);
//       continue;
//     }
//     countZeros++;
//   }
//   arrWithZerosEnd.push(...Array(countZeros).fill(0));
//   return arrWithZerosEnd;
// };
// //Array.prototype.moveZerosToEnd.length
// //polifilling via npm next
// const result = arr.moveZerosToEnd(arr);
// console.log('output: ', result);
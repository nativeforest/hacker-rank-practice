

// This is a staircase of size



//    #
//   ##
//  ###
// ####

// Its base and height are both equal to. It is drawn using # symbols and spaces.
// The last line is not preceded by any spaces.

// Write a program that prints a staircase of size

function staircase(n: number): void {
    
let value:number=n;
let rowFinal:string='';



for(let c=value;c>0;c--){
  for(let r=0;r<value;r++){
    if(r>=(c-1)){
        rowFinal=rowFinal+'#'
        }
    else{
        rowFinal=rowFinal+' '
        }
  }
  console.log(rowFinal)
  rowFinal=''
}

}
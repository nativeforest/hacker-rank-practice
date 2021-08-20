
//Given an array of bird sightings where every element represents a bird type id, determine the id of the most 
//frequently sighted type. If more than 1 type has been spotted that maximum amount, 
//return the smallest of their ids.

function migratoryBirds(arr: number[]): number {
    let pastCount =1;
    let presentCount=0;
    
    let arrSorted = arr.sort((a,b)=>a-b)
    //console.log(arrSorted)
    let presentNumber=arrSorted[0];
    let pastNumber =arrSorted[0];
    
    for(let i=0;i<arrSorted.length;i++){
        
        if(presentNumber == arrSorted[i] ){
            
            presentCount = presentCount+1;
            
            
        }
        else{ 
            if(pastCount<presentCount){
                pastCount = presentCount;
                pastNumber = presentNumber;
            }
            presentNumber= arrSorted[i];
            presentCount=1;
            
        }
        
    }
    if(pastCount<presentCount){ pastCount=presentCount; pastNumber=presentNumber;}
    //console.log(presentNumber,"present-->", presentCount)
    //console.log(pastNumber,"past-->", pastCount)
        const minorModa = pastNumber
    return minorModa
    

}
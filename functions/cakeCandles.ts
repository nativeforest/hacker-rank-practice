
//You are in charge of the cake for a child's birthday. You have decided the cake will have one candle 
//for each year of their total age. They will only be able to blow out the tallest of the candles.
//Count how many candles are tallest. 


function birthdayCakeCandles(candles: number[]): number {
    let max = Math.max(...candles);
    let sum=0;
    for(let item of candles){
        if(item==max){sum=sum+1}
    }
    return sum
}


//v2
function birthdayCakeCandles(candles: number[]): number {
    let sum=0;
	let value=candles[0];
    for(let position=0;position<candles.length-1;position++){
		
		if(value==candles[position+1]){sum=sum+1}
		if(value<candles[position+1]){
            sum=1
			value = candles[position+1];
			}
	
	}
	
	return sum
}
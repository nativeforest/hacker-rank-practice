
  /*
  given an array of cities, obtain how many times it is repeated and obtain the first n values like SQL does....
  */
  Array.prototype.onCountString = function() {
    
    const stringCounter = new Map();
    // const citiesCounter = Object.create(null);

    const saveCounterCity=(key)=>{
      if(typeof stringCounter.get(key) === 'undefined'){
        stringCounter.set(key,1)
      }else{
        lastValue = stringCounter.get(key);
        stringCounter.set(key,lastValue+1);
      }
      
    }

    this.forEach(city=>saveCounterCity(city));
    const citiesPairArray = Array.from(citiesCounter);

    return citiesPairArray;
  }

  function getTopCities(citiesCountPairArray,n){
    const _n= n>citiesCountPairArray.length?citiesCountPairArray.length:n;
    
    const citiesSelected = citiesCountPairArray.slice(0,_n);
    return citiesSelected.map((item)=>{return {[item[1]]:item[0]}})
  }

  /////////////// START ///////////////

  const cities = [
    'colombia',
    'peru',
    'brasil',
    'brasil',
    'brasil',
    'brasil',
    'colombia',
    'canada',
    'austria',
    'austria',
    'colombia',
    'austria',
    'colombia',
    'japan',
    'brasil',
    'japan',
  ];

 const citiesCountPairArray = cities.onCountString();
  
  Array.prototype.sort.call(citiesCountPairArray,(aPair,bPair)=>bPair[1]-aPair[1])
  console.log("SORTED:",citiesCountPairArray)
  console.log("GET TOP  CITIES :",getTopCities(citiesCountPairArray,3))

const p1 = new Promise((resolve, reject) => {
    setTimeout(
      () => resolve({ status: 'success', msg: 'in comming', data: [], id: 1 }),
      1000
    );
  });
  const p2 = new Promise((resolve, reject) => {
    const error = new Error('Error-saso');
  
    error.dataError = {
      status: 'error',
      msg: 'generate error in init promise',
      data: null,
      id: 2,
    };
    reject(error);
  });
  
  //force to finish all promises
  Promise.all([
    p1.catch((error) => {
      console.log(error);
      return error;
    }),
    p2.catch((error) => {
        //propagate error custom object to  promise.all.then()
      console.log("'Fail in promise all", error);
      const newError = new Error('get Fail in catch');
      newError.dataErrorAgain = {
        status: ' generate object error from catch: again',
        id: '000',
      };
      newError.dataError = error.dataError;
      return newError;
    }),
  ]).then((values) => {
    console.log(values[0]); // "in comming"
    console.error(values[1].dataError); // "Error: with custom dataError from original reject promise"
    console.error(values[1].dataErrorAgain); // "Error: with custom dataErrorAgain from catch promise"
  });
  
  //normal way
  Promise.allSettled([p1, p2]).then((results) => {
    console.log(results);
  });


//////////////////// example 1 ////////////////////////
// const movieIds=[1,2,3,94,6,5,7]
//   const fetchMovies = async () => {
//     const promises = movieIds.map((id) => () => fetchMovie(id));
  
//     try {
//       const results = await Promise.all(promises.map((promiseFn) => promiseFn()));
//       results.forEach((result, index) => {
//         if (result !== null) {
//           console.log(`Movie with ID ${movieIds[index]} successfully fetched:`, result);
//         }
//       });
//     } catch (error) {
//       console.error('An error occurred while fetching movies:', error.message);
  
//       // Handle errors (if needed)
//       // You can access the rejected promise values using error.data
//       if (error instanceof CustomDataError) {
//         console.log('Custom Data:', error.data);
//       }
//     }
   
//     }

//   class CustomError extends Error {
//     constructor(message, data) {
//       super(message);
//       this.name = 'CustomError';
//       this.data = data;
//     }
//   }
  
//   const myPromise = new Promise((resolve, reject) => {
//     const errorData = { status: 'error', msg: 'error promise', data: null, id: 2 };
//     const error = new CustomError('Error occurred', errorData);
//     reject(error);
//   });
  
//   myPromise.catch((error) => {
//     if (error instanceof CustomError) {
//       console.error(error.message);
//       console.log('Custom Data:', error.data);
//     } else {
//       console.error(error.message);
//     }
//   });


// //////////////////////// example 2 ////////////////////////

// const fetchData = (url) => {
//     return new Promise((resolve, reject) => {
//       fetch(url)
//         .then(response => {
//           if (!response.ok) {
//             reject(`Error: ${response.status} - ${response.statusText}`);
//           }
//           return response.json();
//         })
//         .then(data => {
//           resolve(data);
//         })
//         .catch(error => {
//           reject(`Fetch error: ${error.message}`);
//         });
//     });
//   };
  
//   const urls = [
//     'https://jsonplaceholder.typicode.com/todos/1',
//     'https://jsonplaceholder.typicode.com/todos/2',
//     'https://jsonplaceholder.typicode.com/todos/3'
//   ];
  
//   const promises = [];
  
//   urls.forEach(url => {
//     promises.push(fetchData(url));
//   });
  
//   Promise.all(promises)
//     .then(results => {
//       console.log('All fetch operations completed successfully:', results);
//     })
//     .catch(errors => {
//       console.error('One or more fetch operations failed:', errors);
//     });
  

  



  
// example:
// (function() {
//     function getWeather() {
//         return new Promise(function(resolve, reject) {
//             // resolve('sunny');
//             reject('your data is not present')
//         })
//     }

//     let promiseWeather = getWeather();
//     promiseWeather.then(
//         // first argument
//         function(data) {
//             console.log(`data from first argument: ${data}`)
//         },
//         // second argument
//         function(data) {
//             console.log(`data from second argument: ${data}`)
//         }
//     )

// })();

// or other way
// (function() {
//     function getWeather() {
//         return new Promise(function(resolve, reject) {
//             // resolve('sunny');
//             reject('your data is not present')
//         })
//     }

//     getWeather().then(
//         // first argument
//         function(data) {
//             console.log(`data from first argument: ${data}`)
//         },
//         // second argument
//         function(data) {
//             console.log(`data from second argument: ${data}`)
//         }
//     )
// })();

// or another way: easy to use, more readable , more manageable
// (function() {

//     function getWeather() {
//         return new Promise(function(resolve, reject) {
//             resolve('sunny');
//             // reject('your data is not present')
//         })
//     }

//     function onSuccess(data) {
//         console.log(`data from first argument: ${data}`)
//     }

//     function onError(data) {
//         console.log(`data from second argument: ${data}`)
//     }

//     getWeather().then(onSuccess, onError)

// })();

// example: more than one then() function
// (function() {

//     function getWeather() {
//         return new Promise(function(resolve, reject) {
//             setTimeout(function() {
//                 resolve('sunny');
//                 // resolve('cloudy');
//                 // reject('your data is not present')
//             }, 200)
//         })
//     }

//     function getWeatherIcon(weatherData) {
//         return new Promise(function(resolve, reject) {
//             console.log(weatherData)
//             setTimeout(()=> {
//                 switch(weatherData) {
//                     case 'sunny':
//                         resolve('☀️')
//                         break
//                     case 'cloudy':
//                         resolve('⛅')
//                         break
//                     case 'rainy':
//                         resolve('🌦️')
//                         break
//                     default:
//                         reject('no icon found!')

//                 }
//             })
//         })
//     }

//     function onSuccess(data) {
//         console.log(`data from first argument: ${data}`)
//     }

//     function onError(data) {
//         console.log(`data from second argument: ${data}`)
//     }

//     /**
//      *  getWeather() jo data return kary ga, wo har than() may pass hoga baari baari.
//      */
//     getWeather()
//     .then(getWeatherIcon)
//     .then(onSuccess, onError)

// })();

// example: with catch() function
// (function() {

//     function func1() {
//         return new Promise((resolve, reject )=> {
//             setTimeout(() => {
//                 resolve('good data');
//                 // reject('no data')
//             }, 200);
//         })
//     }

//     function func2() {
//         console.log('function 2 execute')
//         return new Promise((resolve, reject )=> {
//             setTimeout(() => {
//                 resolve('🤣')
//             }, 200);
//         })
//     }

//     function onSuccess(data) {
//         console.log(`success: ${data} `)
//     }

//     function onError(errorData) {
//         console.log(`ERROR: ${errorData}`)
//     }

//     func1()
//         .then(func2)
//         .then(onSuccess)
//         .catch(onError)
// })();

// example: with finally() function
// yey function har case may chally ga , kha wo resolve ho ya phirh reject
// (function() {

//     function func1() {
//         return new Promise((resolve, reject )=> {
//             setTimeout(() => {
//                 // resolve('good data');
//                 reject('no data')
//             }, 200);
//         })
//     }

//     function func2() {
//         console.log('function 2 execute')
//         return new Promise((resolve, reject )=> {
//             setTimeout(() => {
//                 resolve('🤣')
//             }, 200);
//         })
//     }

//     function onSuccess(data) {
//         console.log(`success: ${data} `)
//     }

//     function onError(errorData) {
//         console.log(`ERROR: ${errorData}`)
//     }

//     function intheEnd() {
//         console.log(`this function will be execute on every case`)
//     }

//     func1()
//         .then(func2)
//         .then(onSuccess)
//         .catch(onError)
//         .finally(intheEnd)
// })();






// practical example:
function getTodo() {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => resolve(json));
  });
}

function displayData(data) {
    console.log(data)
    console.log(data.title)
}

getTodo()
    .then(displayData)

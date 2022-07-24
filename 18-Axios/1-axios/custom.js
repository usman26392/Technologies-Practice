

// let btn = document.querySelector("#btn"),
//     divData = document.querySelector("#divData");

// btn.addEventListener("click", makeRequest);


// ways to write axios syntax: these below syntax will be
// all methods: like get, post(i.e create) , put(i.e update), delete

// function makeRequest() {
//     console.log("Button clicked!")

//     let config = {
//         method: 'get',
//         url: 'users.txt'
//     }

//     // way-1
//     // const promiseObj = axios(config);
//     // promiseObj.then((res)=> {
//     //     console.log(res)
//     //     console.log(res.data)
//     // });

//     // way-2
//     // axios(config).then((res)=> {
//     //     console.log(res)
//     //     console.log(res.data)
//     // });
    
//     // way-3: a little bit messy
//     // axios({
//     //     method: 'get',
//     //     url: 'users.txt'
//     // }).then((res)=> {
//     //     console.log(res)
//     //     console.log(res.data)
//     // });

//     // way-4: get request: shorthand
//     // axios.get('users.txt').then((res)=> {
//     //     console.log(res)
//     //     console.log(res.data)
//     // });

//     // way-5: get request: shorthand ---> 
//     // there is no need to write get because that is bydefault
//     // axios('users.txt').then((res)=> {
//     //     console.log(res)
//     //     console.log(res.data)
//     // });

//     // way-6:
//     // axios('users.txt', {
//     //     method: 'get',
//     // }).then((res)=> {
//     //     console.log(res)
//     //     console.log(res.data)
//     // });

//     // way-7:
//     // axios('users.txt', config).then((res)=> {
//     //     console.log(res)
//     //     console.log(res.data)
//     // });

//     // way-8: get request with error handling
//     // axios.get('users.txt').then((res)=> {
//     //     console.log(res)
//     //     console.log(res.data)
//     // }).catch((error)=> {
//     //     console.log(error.message)
//     // });

//     // way-9: error handling with try catch
//     // we do not use right file name.
//     // try {
//     //     axios.get('userss.txt').then((res)=> {
//     //         console.log(res)
//     //         console.log(res.data)
//     //     })
//     // } catch (error) {
//     //     console.log(error)
//     // }


//     // way-10: request's data , show in a browser
//     axios.get('users.txt').then((res)=> {
//         console.log(res)
//         divData.innerHTML = `<h1>${res.data}</h1>` 
//     })
// }

// axios with async and await
// async function makeRequest() {
//     console.log("Button clicked!")
//     let config = {
//         method: 'get',
//         url: 'users.txt'
//     }
//     const res = await axios(config)
//     console.log(res)
// }


// get data from json file
// function makeRequest() {
//     console.log("Button clicked!")
//     axios.get('users.json').then((res)=> {
//         console.log(res)
//         console.log(res.data.age)
//         console.log(res.data.name)
//     })
// }


// get request from fake API for single data
// function makeRequest() {
//     console.log("Button clicked!")
//     axios.get('https://jsonplaceholder.typicode.com/todos/1').then((res)=> {
//         console.log(res)
//         console.log(res.data.userId)
//         console.log(res.data.title)
//     })
// }

// get request from fake API for all data
// function makeRequest() {
//     console.log("Button clicked!")
//     axios.get('https://jsonplaceholder.typicode.com/todos/').then((res)=> {
//         console.log(res)
//         res.data.map(function(iterateData, idx) {
//             return(
//                 // console.log(iterateData.title)
//                 divData.innerHTML += `<p>${iterateData.title}</p>`
//             )
//         })
        
//     })
// }

/**
 * ---------- post request ------------------------
 *  */ 

// function makeRequest() {
//     console.log("Button clicked!")
//     const config2 = {
//         method: 'POST',
//         url: 'https://jsonplaceholder.typicode.com/users',
//         data: '{"name": "Muhammad Rehan"}'
//     }

//     // way-1
//     axios(config2).then((resp)=> {
//         console.log(resp)
//     });
// }

/**
 *  post request: data will take from form and send it to the server.
 */

 let btn2 = document.querySelector("#btn2");
 btn2.addEventListener("click", makeRequest2); 

function makeRequest2(e) {
    e.preventDefault();
    let userName = document.querySelector("#userName").value,
        userEmail = document.querySelector("#userEmail").value;
        
    const config2 = {
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/users',
        data: JSON.stringify({
            username: userName,
            emai: userEmail
        })
    }

    axios(config2).then((resp)=> {
        console.log(resp)
        console.log(resp.data.username)
    });
}







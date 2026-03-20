/**
 * ----------------- with local JSON Data -----------------
 */

// abi check karna hay k local file(data.json) say kiyun nai lay raha data.

const GetTodos_1 = (callback) => {
    //  develop a object of XMLHttpRequest.
    const myRequest = new XMLHttpRequest();

    //  set the Https request
    myRequest.open("GET",'json/data.json');
    //  send Http request
    myRequest.send();

    myRequest.addEventListener("readystatechange", ()=> {
        if(myRequest.readyState === 4 && myRequest.status === 200 ) {
            let data = JSON.parse(myRequest.responseText);
            callback(false, data);          
        }
        else if (myRequest.readyState === 4) {
            callback(`Could not found the data`, false);
        }
    });

};


// call a function with an anonymous function argument.
// ye method (GetTodos) aik argument(anonymous function == callback function.) day ga.
// apnay method ko.
GetTodos_1((err,myData) => {
    console.log(`callback function fired`);
    if(err) {
        console.log(err)
    } else {
        console.log(myData);
    }
});
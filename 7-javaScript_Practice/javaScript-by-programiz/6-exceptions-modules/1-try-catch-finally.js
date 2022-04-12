
// try-catch
// const numerator = 100,
//     denominator = 5;

//     try {
//         console.log(denominator / numerator  );
//         // below code is skipped
//         console.log(a);
//     } catch (error) {
//         console.log('An error found in try block');
//         console.log(error);   
//     }



// try catch finally
// const numerator = 100,
//     denominator = 5;

//     try {
//         console.log(denominator / numerator  );
//         // below code is skipped
//         console.log(a);
//     } catch (error) {
//         console.log('An error found in try block');
//         console.log(error);   
//     }
//     finally {
//         console.log("executed try and catch blocks!");
//     }


// try catch finally with setTimeout()
window.setTimeout(function() {
    const numerator = 100,
        denominator = 5;
    
        try {
            console.log(denominator / numerator  );
            // below code is skipped
            console.log(a);
        } catch (error) {
            console.log('An error found in try block');
            console.log(error);   
        }
        finally {
            console.log("code from finally block!");
        }
}, 3000);
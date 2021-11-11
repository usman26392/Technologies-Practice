/**
 * ------------ object destructuring ----------
 */

// old way to access data from object:
    // let course = {
    //     language: "javascript",
    //     duration: "sixMonth",
    //     tutor: "geekyShows"
    // };

    // console.log(course.language);


// new way to access data from object:
let course = {
    language: "javascript",
    duration: "sixMonth",
    tutor: "geekyShows"
};

let {language,duration,tutor} = course;

console.log(language);

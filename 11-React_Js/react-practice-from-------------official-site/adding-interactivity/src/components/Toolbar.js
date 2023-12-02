

// example-1: way1

// btn component
// function Button({textbtn, click}) {
//     return (
//         <button onClick={click}> 
//             {textbtn} 
//         </button>
//     )
// }

// // event handler
// function onPlayMovie() {
//     return (
//         alert("play movie")
//     )
// }

// // event handler
// function onUploadImage() {
//     return (
//         alert("image uploading")
//     )
// }


// const Toolbar = () => {
//   return (
//     <div>
//         <Button textbtn="Play movie" click={onPlayMovie}  />
//         <Button textbtn="Upload image" click={onUploadImage} />
//     </div>
//   )
// }

// export default Toolbar


// example-2: way-2

// function Button({textbtn, click}) {
//     return (
//         <button onClick={click}> 
//             {textbtn} 
//         </button>
//     )
// }

// const Toolbar = ({playMovie, uploadImg}) => {
//   return (
//     <div>
//         <Button textbtn="Play movie" click={playMovie}  />
//         <Button textbtn="Upload image" click={uploadImg} />
//     </div>
//   )
// }

// export default Toolbar




// way-3:
function Button({click, children }) {
  return (
    <button onClick={click}>
      {children}
    </button>
  );
}


function Toolbar({ playMovie, uploadImg }) {
  return (
    <div>
      <Button click={playMovie}>
        Play Movie
      </Button>
      <Button click={uploadImg}>
        Upload Image
      </Button>
    </div>
  );
}

export default Toolbar




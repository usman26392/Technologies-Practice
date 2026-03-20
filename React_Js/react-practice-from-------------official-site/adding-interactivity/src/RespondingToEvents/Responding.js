
// topic-1
// const Button = () => {
//     function handleClicked(e) {
//         alert("you clicked me!");
//         console.log(e);
//     }
//   return (
//     <>
//         <hr/>
//         <button onClick={ handleClicked } >Button</button>
//     </>
//   )
// }

// export default Button

//Topic2: Reading props in event handlers
// function AlertButton({message, children}) {
//   return (
//     <button onClick={()=> { alert(message) }}>{children}</button>
//   )
// }

// function Toolbar2() {
//   return (
//     <div>
//       <hr />
//       <hr />
//       <AlertButton message="playing your movie">
//         Play a movie
//       </AlertButton>
//       <AlertButton message="stoped">
//         stop a movie
//       </AlertButton>
//     </div>
//   )
// }

// export default Toolbar2;


// Topic3: Passing event handlers as props
// function Button({children, click}) {
//   return (
//     <button onClick={click}>{children}</button>
//   )
// }

// // way-1
// function PlayingMovie() {
//   return (
//     <Button click={()=> {alert("playing a cartoon movie!")}}>
//       Play cartoon movie
//     </Button>
//   )
// }

// // way-2
// function UploadImg({nameOfImg}) {
//   function handleFruitName() {
//     alert("Apple fruit")
//   }
//   return (
//     <Button click={handleFruitName}>
//       {nameOfImg} figure
//     </Button>
//   )
// }


// function Toolbar3() {
//   return (
//     <>
//       <PlayingMovie/>
//       <UploadImg nameOfImg={"Apple"}/>
//     </>
//   )
// }

// export default Toolbar3;

// topic4: event bubbling or event propagation
export default function Toolbar4() {
  return (
    <>
    <h1>Event bubbling or event propagation </h1>
    <div 
        style={{backgroundColor: "gray", padding: "30px"}}
        onClick={()=> {alert("you clicked div!")}}
      >
      <button 
        onClick={(e)=> {
            // e.stopPropagation();
            alert("you clicked a button!")
          }}>
          Play movie
      </button>
    </div>
    </>
  )
}
import { useState } from "react"
import { sculptureList } from "../data/sculptureList"

// console.log(sculptureList)




export default function SculptureGallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const hasNext = index < sculptureList.length - 1;
    const hasPrev = index > 0;
    
    // concept of state
    // console.log(index)
    // console.log((index + 1) , 'request a re-render'  )
    // console.log(index)



    let sculpture = sculptureList[index];
    // console.log(sculpture)

    function handleNextSlide() {
        if(hasNext) {
            setIndex(index + 1)
        }
        else {
            setIndex(0)
        }
    }

    function handlePrevSlide() {
      return (
        hasPrev ? setIndex(index -1) : index
      )  
    }


    function handleToggleDetails() {
        setShowMore(!showMore)
    }


  return (
    <div>
        <button 
            onClick={handleNextSlide}>
                Next
        </button>
        <button 
            onClick={handlePrevSlide}>
                Previous
        </button>
        <h2> <em>{sculpture.name}</em>  by {sculpture.artist}</h2>
        <h3>({index + 1}  of {sculptureList.length } )</h3>
        <button onClick={handleToggleDetails}>
            {showMore ? 'hide': 'show'} details
        </button>
        <p> {showMore &&  sculpture.description } </p>
        {/* <img 
            src={sculpture.url}
            alt={sculpture.alt}
        /> */}
    </div>
  )
}


import { useState } from "react"
import style from "./SculptureGallery.module.css"
import { sculptureList } from "../data/gallerydata";

export default function SculptureGallery () {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    // console.log(index);
    // console.log(setIndex);
    // console.log( sculptureList[0] );

    function nextData(e) {
        setIndex((i)=> i + 1)
    }
    console.log(index)

    function prevData(e) {
        setIndex(index - 1);
        console.log(index)
    }

    function showDescription(e) {
        setShowMore(!showMore)
    }


    let sculpture = sculptureList[index];
    // console.log( sculpture  )

    return (
        <div className= {`${style["sculpture-wrapper"]}`} >
            <button onClick={nextData}>Next</button>
            <button onClick={prevData}>Previous</button>

            <h1> <em>{sculpture.name}</em> by {sculpture.artist} </h1>

            {/* react way */}
            <p> ( {index + 1} of {sculptureList.length} )  </p>  

            {/* or */}

            {/* js way */}
            {/* <p>{`${index + 1} of ${sculptureList.length }`} </p>  */}

            <div>
                <img src={sculpture.url} alt={sculpture.alt} />
            </div>

            <div>
                <button onClick={showDescription} style={{marginTop: "2em"}}>
                    {showMore ? "hide" : "show" } details
                </button>
                <p>{ showMore && sculpture.description }</p>
            </div>
        </div>
    )
}
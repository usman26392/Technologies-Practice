import Image from "next/image"
import img from "../../public/images/1.jpg"


export default function Pets() {
    return (
        <>
            <Image src={img} alt="" />
            {
                ["1","2","3","4","5","6","7"].map(function(imageName) {
                    return (
                        <div key={imageName}>
                            <Image src={`/images/${imageName}.jpg`} alt="pets" width="300" height="300" />
                        </div>
                    )
                })
            }
        </>
    )
}
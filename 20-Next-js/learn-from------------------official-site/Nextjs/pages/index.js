
import { useState } from 'react';
        
    // a child component
    function Header({title}) {
        //console.log(title)
        return (
            <h1>{title}</h1>
        )
    }
    
        
    // a parent component: main component
    export default function HomePage() {
        const [likes, setLikes ] = useState(0);
        const navItems = ["Home", "About", "News", "Blogs"];
        
        function handleButton() {
            // console.log("increment like count !");
            setLikes(()=> likes + 1);
        }

        return (
            <>
                <Header title="React" />
                <Header title="Next js"/>
                {
                    navItems.map(function(ni, idx) {
                        return (
                            <h2 key={idx} >{ni}</h2>
                        )
                    })
                }
                <button onClick={handleButton}>like: {likes} </button>
            </>
        )
    }
        


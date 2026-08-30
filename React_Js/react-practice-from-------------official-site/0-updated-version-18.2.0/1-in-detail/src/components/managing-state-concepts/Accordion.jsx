import { useState } from "react"


// example: sharing state between components ( lifting state up )


// parent common component for Panel component.
function Accordion() {
    const [isActiveAccordion, setIsActiveAccordion] = useState(false);
    // console.log(isActiveAccordion)
  return (
    <div>
        <h2>Accordion</h2>
        <Panel
            title="About" 
            activeAcc = {isActiveAccordion === false }
            onshow = {()=> setIsActiveAccordion(false)}
        >
            With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
        </Panel>
        <Panel
            title="Etymology" 
            activeAcc = {isActiveAccordion === true }
            onshow = {()=> setIsActiveAccordion(true)}
        >
            With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
        </Panel>
        
    </div>
  )
}

export default Accordion


function Panel({title, activeAcc, onshow, children}) {
    return (
        <div className="accordion">
            <h3>{title}</h3>
            {
                activeAcc 
                ? (<p>{children}</p>)
                : <button onClick={onshow} >Show</button>
            }
            
        </div>
    )
}


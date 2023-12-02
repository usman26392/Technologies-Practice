
import { Fragment } from "react";



// const people = [
//     'Creola Katherine Johnson: mathematician',
//     'Mario José Molina-Pasquel Henríquez: chemist',
//     'Mohammad Abdus Salam: physicist',
//     'Percy Lavon Julian: chemist',
//     'Subrahmanyan Chandrasekhar: astrophysicist'
// ];




/**
 * or
 * This data can be structured even more.
 */

const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  }, {
    id: 3,
    name:'Percy Lavon Julian',
    profession: 'chemist',  
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
  }];


const PeopleList = () => {
    let specificPeople = people.filter(function(ppl) {
        return (
            ppl.profession === 'chemist'
        )
    })

  return (
    <div>
        <ul>
            {/* {
                // people.map((ppl, idx)=> (
                //     <li key={idx}>{ppl.name}</li>
                // ))
            } */}

            {
                specificPeople.map(p => {
                    return (
                        <li key={p.id}> {p.name} </li>
                    )
                })
            }

            {/* or
                    Displaying several DOM nodes for each list item
             */}

            {
                specificPeople.map(p => {
                    return (
                        <Fragment key={p.id}>
                            <li> {p.name} </li>
                            <span>{p.profession}</span>
                        </Fragment>
                    )
                })
            }

            
            
        </ul>
    </div>
  )
}

export default PeopleList
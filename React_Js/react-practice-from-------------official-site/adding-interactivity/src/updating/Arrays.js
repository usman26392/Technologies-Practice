
import { useState } from "react";



// example: adding to an array
let nextId = 0;

export default function InspireSculpture() {
    const [name, setName ] = useState('');
    const [artists, setArtists] = useState([]);

    return (
        <div>
            <h2>Inspire sculpture</h2>
            <input 
                type="text"
                value={name}
                onChange= {(e)=> (
                    setName(e.target.value)
                )} 
                />
            <button
                onClick={()=> {
                    setName("");
                    setArtists([
                        ...artists, {id: nextId++, name: name}
                    ]);
                }}
                >add</button>
            <ul>
                {
                    artists.map((artist)=> (
                        <li key={artist.id} >{artist.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}


// example: removing an array element
let initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye'},
    { id: 2, name: 'Louise Nevelson'},
  ];

export function Sculplist() {
    const [artists, setArtists] = useState(initialArtists);
    return (
        <div>
            <h1>removing an element</h1>
            <ul>
                {
                    artists.map((artist)=> (
                        <li key={artist.id}> {artist.name} 
                            <button
                                onClick={()=> (
                                    setArtists(
                                        artists.filter(a => (a.id !== artist.id))
                                    )
                                )} 
                            >delete</button> 
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

// example: transforming an array

let initialShapes = [
    { id: 0, type: 'circle', x: 50, y: 100 },
    { id: 1, type: 'square', x: 150, y: 100 },
    { id: 2, type: 'circle', x: 250, y: 100 },
  ];

export function ShapeEditor() {
    const [shapes, setShapes ] = useState(initialShapes);

    


    return (
        <div style={{position: "relative", width: "300px", margin: "0 auto"}}>
            <button>moves circle down!</button>
            {
                shapes.map((shape)=> (
                    <div
                        key={shape.id} 
                        style={{
                            background: "purple",
                            position: "absolute",
                            left: shape.x,
                            top: shape.y,
                            borderRadius: shape.type == "circle" ? "50%" : "0",
                            width: 20,
                            height: 20
                        }}>
                    </div>
                ))
            }
        </div>
    )
}

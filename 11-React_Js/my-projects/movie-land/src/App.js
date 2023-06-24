import { useState,useEffect } from "react";
import './App.css';
import searchIcon from './svgs/search.svg';
import MovieCard from './MovieCard';



// my api key:  f2c66a59
const API_URL = 'http://www.omdbapi.com?apikey=f2c66a59'



// ------------------------- example-1 -------------------------------
// single static data
// const movie_1 = {
//     "Title": "Spider-Man",
//     "Year": "2002",
//     "imdbID": "tt0145487",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"

// }


//  const App = () => {
//     const searchMovies = async (title)=> {
//         const response = await fetch(`${API_URL}&s=${title}`);
//         const movieData = await response.json();
//         console.log(movieData);
//     }

//     useEffect(()=> {
//         searchMovies('spider man');
//     },[]);


//     return (
//       <div className="App">
//         <h1>Movie land</h1>
//         <div className="search">
//             <input
//                 placeholder="Search for Movies" 
//                 // value='superman'
//                 onChange={()=> {}}
//             />
//             <img 
//                 src={searchIcon} 
//                 alt="search icon"
//                 onClick={()=> {}} 
//                 />
//         </div>

//         <div className="container">
//             <div className="movie">
//                 <div className="">
//                     <p>{movie_1.Year}</p>
//                 </div>
//                 <div>
//                     <img src={
//                         movie_1.Poster} 
//                         alt="movie poster" 
//                     />
//                 </div>
//                 <div>
//                     <span>{movie_1.Type}</span>
//                     <h3>{movie_1.Title}</h3>
//                 </div>
//             </div>
//         </div>
//       </div>
//     )
// }

// export default App;


// ------------------- example-2 ---------------------------------


const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setsearchTerm] = useState([]);

    const searchMovies = async (title)=> {
        const response = await fetch(`${API_URL}&s=${title}`);
        const movieData = await response.json();
        setMovies(movieData.Search);
    }

    useEffect(()=> {
        searchMovies('no time to die');
    },[]);


    return (
      <div className="App">
        <h1>Movie land</h1>
        <div className="search">
            <input
                placeholder="Search for Movies" 
                onChange={(e)=> {
                    setsearchTerm(e.target.value)
                }}
            />
            <img 
                src={searchIcon} 
                alt="search icon"
                onClick={()=> {
                    searchMovies(searchTerm)
                }} 
                />
        </div>

        <div className="container">
            {
                movies.map((movie, index)=> {
                    return (
                        <MovieCard movie={movie} key={index} />
                    )
                })
            }
        </div>
        
      </div>
    )
}

export default App;

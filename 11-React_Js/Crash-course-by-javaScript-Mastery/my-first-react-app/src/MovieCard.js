
const MovieCard = ({movie}) => {
  return (
    <div className="movie">
        <div className="">
            <p>{movie.Year}</p>
        </div>
        <div>
            <img src={
                movie.Poster} 
                alt="movie poster" 
            />
        </div>
        <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
        </div>
    </div>
  )
}

export default MovieCard;
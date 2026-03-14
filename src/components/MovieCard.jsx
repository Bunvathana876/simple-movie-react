import "../css/MovieCard.css"

function MovieCard({movie}){
    return (
        <div className="movie-card">
            <img src={`/${movie.type}/${movie.id}.jpg`} alt={movie.title} />
            <h2 className="movie-title">{movie.title}</h2>
            <p className="movie-release-date">{movie.releaseDate}</p>
        </div>
    )
}

export default MovieCard;
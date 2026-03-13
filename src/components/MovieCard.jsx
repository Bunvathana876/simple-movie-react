import React from "react";
import "../css/MovieCard.css"

function MovieCard({movie}){
    return (
        <div className="movie-card">
            <img src={movie.img} alt={movie.title} className="movie-img"/>
            <h2 className="movie-title">{movie.title}</h2>
            <p className="movie-release-date">{movie.releaseDate}</p>
        </div>
    )
}

export default MovieCard;
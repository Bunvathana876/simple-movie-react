import MovieCard from "./MovieCard";
import movies from "../data/movies.json";

function MovieList() {
  return (
    <>
      {movies.map((movie) => (
        <MovieCard key={`${movie.type}-${movie.id}`} 
        movie={movie} />
      ))}
    </>
  );
}
export default MovieList;

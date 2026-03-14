import MovieCard from "../components/MovieCard";
import "../css/MoviePage.css";
import Navbar from "../components/Navbar";
import movies from "../data/movies.json";

function MoviePage() {
    const listMovies = [...movies];
  return (
    <div className="container-movie-list">
      <Navbar />
      <h1>All Movies </h1>
      <div className="list-movies">
        {listMovies.map((movies) => (
            <MovieCard key={`${movies.type}-${movies.id}`} movie={movies}/>
        ))}
      </div>
    </div>
  );
}
export default MoviePage;

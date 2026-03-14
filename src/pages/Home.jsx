import Navbar from "../components/Navbar";
import movies from "../data/movies.json";
import MovieCard from "../components/MovieCard";
import tv from "../data/tv.json";
import "../css/Home.css";
function Home() {
  const allContent = [...movies, ...tv];

  return (
    <div className="home-container">
      <Navbar />
      <h1>Welcome to movieFull</h1>
      <div className="movie-list">
        {allContent.map((item) => (
          <MovieCard key={`${item.type}-${item.id}`} movie={item} />
        ))}
      </div>
    </div>
  );
}
export default Home;

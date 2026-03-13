import Navbar from "../components/Navbar";
import Movielist from "../components/MovieList";
import "../css/Home.css";
function Home() {
    

  return (
    <div className="home-container">
      <Navbar />
      <h1>Welcome to movieFull</h1>
      <div className="movie-list">
        <Movielist />
      </div>
    </div>
  );
}
export default Home;

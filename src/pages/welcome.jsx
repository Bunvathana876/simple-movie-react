import Navbar from "../components/Navbar";
import "../css/welcome.css";
function Welcome() {
  return (
    <div className="welcome-container">
      <Navbar />

      <div className="welcome-text">
        <h1>Welcome to MovieFull</h1>
        <p>
          Discover and explore a world of movies at your fingertips. Dive into
          our extensive collection, find your favorites, and enjoy a seamless
          movie experience like never before.
        </p>
        <button className="explore-button">
          <a href="/home">Explore Movies</a>
        </button>
      </div>
    </div>
  );
}
export default Welcome;

import Home from "./pages/Home";
import Welcome from "./pages/welcome";
import MoviePage from "./pages/MoviesPage";
import TvPage from "./pages/TvPage";
import {Routes, Route} from "react-router-dom"
import "./css/App.css";

function App() {
  return (
    <div className="main-containe">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<MoviePage/>}/>
        <Route path="/Tv" element={<TvPage/>} />
      </Routes>
    </div>
  );
}

export default App;

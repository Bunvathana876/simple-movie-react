import "../css/TvPage.css";
import Navbar from "../components/Navbar";
import tv from "../data/tv.json"
import MovieCard from "../components/MovieCard";

function TvPage() {
    const listTv = [...tv];
  return (
    <>
      <div className="container-Tv-list">
        <Navbar />
        <h1>All Tv Show</h1>
        <div className="list-Tv">
        {listTv.map((Tvshow) => (
            <MovieCard key={`${Tvshow.type}-${Tvshow.id}`} movie={Tvshow}/>
        ))}
      </div>
      </div>
    </>
  );
}
export default TvPage;

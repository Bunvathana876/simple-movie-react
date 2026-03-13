import MovieCard from "./MovieCard";

function Movielist() {
  const movies = [
    {
      id: 1,
      title: "Zootopia 2",
      releaseDate: "Released: 2025-11-26",
    },
    {
      id: 2,
      title: "Marty Supreme",
      releaseDate: "Released: 2025-12-19",
    },
    {
      id: 3,
      title: "GOAT",
      releaseDate: "Released: 2026-02-11",
    },
    {
      id: 4,
      title: "Avengers: Endgame",
      releaseDate: "Released: 2019-04-24",
    },
    {
      id: 5,
      title: "Spider-Man: No Way Home",
      releaseDate: "Released: 2021-12-15",
    },
    {
      id: 6,
      title: "Interstellar",
      releaseDate: "Released: 2014-11-05",
    },
    {
      id: 7,
      title: "The Dark Knight",
      releaseDate: "Released: 2008-07-16",
    },
    {
      id: 8,
      title: "Fight Club",
      releaseDate: "Released: 1999-10-15",
    },
    {
      id: 9,
      title: "Forrest Gump",
      releaseDate: "Released: 1994-07-06",
    },
    {
      id: 10,
      title: "Pulp Fiction",
      releaseDate: "Released: 1994-09-10",
    },
  ];
  return (
    <>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={{
            ...movie,
            img: `/posts/${movie.id}.jpg`,
          }}
        />
      ))}
    </>
  );
}
export default Movielist;

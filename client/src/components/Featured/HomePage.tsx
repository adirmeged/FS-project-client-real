import { useNavigate } from "react-router-dom";
import { defaultMovie } from "../../DB/DefaultMovie";
import type { Movie } from "../../Type";
import Icons from "../Icons";
import MovieSideBarCard from "./MovieSideBarCard";
import MovieList from "../MovieList/MovieList";

const HomePage = () => {
  const navigate = useNavigate();
  const movies: Movie[] = defaultMovie;
  const moviesTopReview: Movie[] =[...defaultMovie,...defaultMovie];
  return (
    <div>
      <div className="h-150 py-6 flex justify-center ">
        <div className="relative flex items-center w-5xl justify-start -mt-18">
          <div className="relative">
            <img
              src={movies[0].Image[1].url}
              className=" w-2xl h-115 rounded-xl brightness-65 cursor-pointer"
              onClick={() => {
                navigate("/MoviePage", { state: { movie: movies[0] } });
              }}
            />
            <img
              src={movies[0].Image[0].url}
              className="absolute top-60 left-5 w-4xs h-70 rounded-xl cursor-pointer"
              onClick={() => {
                navigate("/MoviePage", { state: { movie: movies[0] } });
              }}
            />
            <div className="absolute rounded-xl top-115 left-63 text-3xl w-xs">
              {movies[0].plot}
            </div>
          </div>
          <div className="px-10">
            <div className="flex items-center">
              <Icons.YellowPoint />
              <h1>Featured Choices</h1>
            </div>
            {movies.map((movie) => (
              <MovieSideBarCard movie={movie} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <MovieList header="Top Review" Movies={moviesTopReview} description="The highest rated movies" />
      </div>
    </div>
  );
};

export default HomePage;

import { defaultMovie } from "../DB/DefaultMovie";
import type { Movie } from "../Type";
import MovieSideBarCard from "./MovieSideBarCard";
import Icons from "../icon";

const HomePage = () => {
  const movies: Movie[] = defaultMovie;
  const numMovies = 3;
  return (
    <div className="h-150 bg-radial-[at_50%_75%] from-homePageBG via-black to-indigo-900 to-90% py-6">
      <div className="relative flex items-center justify-center mx-5">
        <div className="relative">
          <img
            src={movies[0].Image[1].url}
            className=" w-2xl h-115 rounded-xl brightness-65 cursor-pointer"
          />
          <img
            src={movies[0].Image[0].url}
            className="absolute top-60 left-5 w-4xs h-70 rounded-xl cursor-pointer"
          />
          <div className="absolute rounded-xl top-115 left-63 text-3xl w-xs">
            {movies[0].plot}
          </div>
        </div>
        <div className="px-10">
          <div className="flex items-center">
            <Icons.Point />
            <h1>Featured Choices</h1>
          </div>
          {[...Array(numMovies).keys()].map((i) => (
            <MovieSideBarCard movie={movies[i]} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

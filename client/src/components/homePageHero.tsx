import { TbPointFilled } from "react-icons/tb";
import { defaultMovie } from "../DB/DefaultMovie";
import type { Movie } from "../Type";
import MovieSideBar from "./MovieSideBar";

const HomePageHero = () => {
  const movies: Movie[] = defaultMovie;

  return (
    <div className="h-150 bg-homePageBG py-6">
      <div className=" relative flex ml-25">
        <img
          src={movies[0].Image[1].url}
          className=" w-3xl h-115 rounded-xl brightness-65"
          alt="logo"
        />
        <img
          src={movies[0].Image[0].url}
          className="absolute top-60 left-4 w-3xs h-70 rounded-xl "
          alt="logo"
        />

        <div className="absolute rounded-xl  top-110 left-75 text-3xl">
          {movies[1].plot}
        </div>

        <div className="px-10  ">
          <div className="flex items-center">
            <TbPointFilled className="fill-yellow-200" />
            <h1 className="text-xl">Featured Choices</h1>
          </div>
          <MovieSideBar movie={movies[1]} />
          <MovieSideBar movie={movies[2]} />
          <MovieSideBar movie={movies[0]} />
        </div>
      </div>
    </div>
  );
};

export default HomePageHero;

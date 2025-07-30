import { TbPointFilled } from "react-icons/tb";
import type { Movie } from "../Type";
import { defaultMovie } from "../DB/DefaultMovie";
import MovieCrad from "./MovieCrad";

const SearchOveraly = () => {
  const movies: Movie[] = defaultMovie;

  return (
    <div className="mx-20 ">
      <div className="flex items-center">
        <TbPointFilled className="fill-yellow-200" />
        <h1 className="text-xl">Top reviewed this week</h1>
      </div>
      <div className="flex gap-3 items-center">
        <MovieCrad movie={movies[0]} />
        <MovieCrad movie={movies[0]} />
        <MovieCrad movie={movies[0]} />
        <MovieCrad movie={movies[0]} />
        <MovieCrad movie={movies[0]} />
        <MovieCrad movie={movies[0]} />
      </div>
    </div>
  );
};

export default SearchOveraly;

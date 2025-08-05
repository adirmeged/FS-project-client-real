import type { Movie } from "../../Type";
import { defaultMovie } from "../../DB/DefaultMovie";
import { useState } from "react";
import ReviewsPopup from "../ReviewWindows";
import Icons from "../Icons";
import MovieCrad from "./MovieCrad";

interface MovieListProps {
  header: string;
  numMovieShow: number;
}
const MovieList = ({ header, numMovieShow }: MovieListProps) => {
  const movies: Movie[] = defaultMovie;
  const [isRateActive, setIsRateActive] = useState(false);
  const [rateMovie, setRateMovie] = useState(movies[0]);

  return (
    <div className=" relative pb-15 flex justify-center">
      <div className="w-full">
        <div className="flex items-center justify-start  xl:w-full  justify-center mx-auto">
          <Icons.YellowPoint />
          <h1 className="text-xl w-45 text-primaryWhite">{header}</h1>
        </div>
        <div className="flex flex-wrap gap-3 justify-center  xl:w-full">
          {[...Array(numMovieShow).keys()].map((i) => (
            <MovieCrad
              movie={movies[i % 3]}
              setIsRateActive={setIsRateActive}
              setRateMovie={setRateMovie}
              key={i}
            />
          ))}
        </div>
        <div className="absolute top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 z-4">
          {isRateActive ? (
            <ReviewsPopup movie={rateMovie} setIsRateActive={setIsRateActive} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

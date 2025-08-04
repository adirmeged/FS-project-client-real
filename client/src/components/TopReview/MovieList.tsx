import type { Movie } from "../../Type";
import { defaultMovie } from "../../DB/DefaultMovie";
import MovieCrad from "./MovieCrad";
import { useState } from "react";
import ReviewsPopup from "../ReviewWindows";
import Icons from "../Icons";

const MovieList = () => {
  const movies: Movie[] = defaultMovie;
  const [isRateActive, setIsRateActive] = useState(false);
  const [rateMovie, setRateMovie] = useState(movies[0]);

  return (
    <div className=" relative pb-15 pt-15">
      <div className="flex items-center md:justify-center md:mr-190 ms:w-xl ">
        <Icons.Point />
        <h1 className="text-xl">Top reviewed this week</h1>
      </div>
      <div className="flex flex-wrap gap-3 items-center justify-center">
        {[...Array(6).keys()].map((i) => (
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
  );
};

export default MovieList;

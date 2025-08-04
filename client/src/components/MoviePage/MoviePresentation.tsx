import type { Movie } from "../../Type";
import GenreBubble from "./GenreBubble";
import Icons from "../Icons";
import ReviewsPopup from "../ReviewWindows";
import { useState } from "react";
interface MoviePresentationProps {
  movie: Movie;
}
const MoviePresentation = ({ movie }: MoviePresentationProps) => {
  const [isRateActive, setIsRateActive] = useState(false);

  return (
    <div>
      <h1 className="text-3xl text-primaryWhite">{movie.movieName}</h1>
      <div className="flex items-center gap-2 text-xs mt-3 ">
        {movie.publicationYear.split(".")[2]}
        <Icons.GrayPoint />
        {movie.movieLength}
      </div>
      <div className="flex justify-end gap-4 -mt-10">
        <div
          className="bg-custumGrayfilterBG w-25 h-12 rounded-xl flex items-center justify-center gap-2 p-2 text-xs text-primaryWhite cursor-pointer"
          onClick={() => setIsRateActive(true)}
        >
          {<Icons.EmptyStar />} {"Rate"}
        </div>
        <div className="bg-custumGrayfilterBG w-35 h-12 rounded-xl flex items-center justify-center gap-2 p-2 text-primaryWhite">
          {<Icons.FullStar />} {movie.rating}
          <div className="text-primaryGray">{"/10"}</div>
          <div className="text-xs mt-2 text-primaryGray">{"(200K)"}</div>
        </div>
      </div>
      <div className="flex gap-6 mt-4">
        <img src={movie.Image[0].url} className=" w-xs h-80 rounded-md " />
        <img
          src={movie.Image[1].url}
          className=" w-2xl h-80 rounded-md brightness-65 "
        />
      </div>
      <div className="flex items-center gap-2 mt-4 ">
        <div className="text-md mr-10">{"Genre"}</div>
        {movie.genre.map((i) => (
          <GenreBubble genre={i} key={i} />
        ))}
      </div>
      <div className="flex items-center gap-2 mt-4 ">
        <div className="text-md mr-15">{"Plot"}</div>
        <div className="text-xs text-primaryWhite"> {movie.plot}</div>
      </div>
      <div className="absolute top-70 left-1/2 -translate-x-1/2 -translate-y-1/2 z-4">
        {isRateActive ? (
          <ReviewsPopup movie={movie} setIsRateActive={setIsRateActive} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MoviePresentation;

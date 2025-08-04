import type { Movie } from "../../Type";
import Icons from "../Icons";

interface ReviewBubbleProps {
  movie: Movie;
}
const ReviewBubble = ({ movie }: ReviewBubbleProps) => {
  return (
    <div className="bg-custumGrayfilterBG h-75  w-md px-3 py-2 text-primaryWhite rounded-xl">
      <div className="flex items-center">
        <Icons.FullStar />
        <div className="text-yellow-300 ml-3">{movie.review[0].rating}</div>
        {"/10"}
      </div>
      <div className="mt-2 text-lg">{movie.review[0].Title}</div>
      <div>
        <div className="flex items-center gap-2 text-xs mt-3 mb-3">
          <div className="text-yellow-300">{movie.review[0].userName}</div>
          <Icons.GrayPoint />
          {movie.review[0].publicationYear}
        </div>
        <div className="line-clamp-5">{movie.review[0].contect}</div>
      </div>
    </div>
  );
};

export default ReviewBubble;

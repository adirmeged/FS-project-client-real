import type { Movie } from "../Type";
import { useState } from "react";
import Icons from "./Icons";

interface ReviewWindows {
  movie: Movie;
  setIsRateActive: (value: boolean) => void;
}
const ReviewsPopup = ({ movie, setIsRateActive }: ReviewWindows) => {
  const [reviewText, setReviewText] = useState("");
  const fullStar: number = 3;
  const MAX_LEN: number = 500;
  const emptyStar: number = 7;

  return (
    <div className=" bg-filterBG w-lg h-95 rounded-xl text-primaryWhite text-lg">
      <div className="flex">
        <div onClick={() => setIsRateActive(false)} className="cursor-pointer">
          <Icons.Close />
        </div>

        <h1 className="ml-8 mt-3">Review '{movie.movieName}'</h1>
      </div>
      <div className="flex ml-17 mt-3 gap-2 items-center">
        {[...Array(fullStar)].map((i) => (
          <Icons.FullStar key={i} />
        ))}
        {[...Array(emptyStar)].map((i) => (
          <Icons.EmptyStar key={i} />
        ))}
      </div>
      <textarea
        value={reviewText}
        placeholder="Review text"
        className="bg-filterBG px-3 py-3 h-50 rounded-xl text-lg w-full border border-black w-sm mx-15 mt-3 border-primaryGray"
        maxLength={MAX_LEN}
        onChange={(e) => setReviewText(e.target.value)}
      ></textarea>
      <div className="text-xs ml-100 text-primaryGray">
        {reviewText.length}/{MAX_LEN}
      </div>
      <button className="absolute bottom-5 right-15 bg-yellow-400 w-30 rounded-xl text-black text-xs p-2 cursor-pointer">
        Add Review +
      </button>
    </div>
  );
};

export default ReviewsPopup;

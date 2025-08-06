import type { Movie, Review } from "../../Type";
import GenreBubble from "./GenreBubble";
import Icons from "../Icons";
import ReviewsPopup from "../ReviewWindows";
import { useState } from "react";
interface ContentSectionProps {
  title: string;
  content: React.ReactNode;
}

const ContentSection = ({ title, content }: ContentSectionProps) => {
  return (
    <div className="flex items-center gap-2 mt-4">
      <div className="text-md mr-10">{title}</div>
      <div className="text-xs text-baseText flex gap-2">{content}</div>
    </div>
  );
};
interface MainSectionProps {
  movie: Movie;
}
const MainSection = ({ movie }: MainSectionProps) => {
  const [isRateActive, setIsRateActive] = useState(false);
  const movieYear = movie.publicationDate.split(".")[2];
  const maxRating = import.meta.env.VITE_RATE_MAX;
  const formatReviewCount = (reviews: Review[]) => {
    const count = reviews.length;
    if (count >= 1000) {
      const formattedCount = (count / 1000).toFixed(1);
      return `${parseFloat(formattedCount)}k`;
    }
    return count.toString();
  };

  return (
    <div>
      <h1 className="text-3xl text-baseText">{movie.movieName}</h1>
      <div className="flex items-center gap-2 text-xs mt-3 ">
        {movieYear}
        <Icons.GrayPoint />
        {movie.movieLength}
      </div>
      <div className="flex justify-end gap-4 -mt-10">
        <div
          className="bg-filterBG w-25 h-12 rounded-xl flex items-center justify-center gap-2 p-2 text-xs text-baseText cursor-pointer"
          onClick={() => setIsRateActive(true)}
        >
          {<Icons.EmptyStar />} {"Rate"}
        </div>

        <div className="bg-filterBG w-35 h-12 rounded-xl flex items-center justify-center gap-2 p-2 text-baseText">
          {<Icons.FullStar />} {movie.rating}
          <div className="text-primaryGray">{`/${maxRating}`}</div>
          <div className="text-xs mt-2 text-primaryGray">
            {`( ${formatReviewCount(movie.review)} )`}
          </div>
        </div>
      </div>

      <div className="flex gap-6 mt-4">
        <img src={movie.Image[0].url} className=" w-xs h-80 rounded-md" />
        <img
          src={movie.Image[1].url}
          className=" w-2xl h-80 rounded-md brightness-65"
        />
      </div>

      <ContentSection
        title="Genre"
        content={movie.genre.map((i) => (
          <GenreBubble genre={i} key={i} />
        ))}
      />

      <ContentSection title="Plot" content={movie.plot} />

      <div className="absolute top-70 left-1/2 -translate-x-1/2 -translate-y-1/2 z-4">
        {isRateActive && (
          <ReviewsPopup
            movieName={movie.movieName}
            setIsRateActive={setIsRateActive}
          />
        )}
      </div>
    </div>
  );
};

export default MainSection;

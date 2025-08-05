import type { Review } from "../../Type";
import Icons from "../Icons";

interface ReviewBubbleProps {
  review: Review;
}
const ReviewBubble = ({ review }: ReviewBubbleProps) => {
  return (
    <div className="bg-filterBG h-75  w-md px-3 py-2 text-primaryWhite rounded-xl">
      <div className="flex items-center">
        <Icons.FullStar />
        <div className="text-yellow-300 ml-3">{review.rating}</div>
        {"/10"}
      </div>

      <div className="mt-2 text-lg">{review.Title}</div>

      <div>
        <div className="flex items-center gap-2 text-xs mt-3 mb-3">
          <div className="text-yellow-300">{review.userName}</div>
          <Icons.GrayPoint />
          {review.publicationDate}
        </div>

        <div className="line-clamp-5">{review.contect}</div>
      </div>
    </div>
  );
};

export default ReviewBubble;

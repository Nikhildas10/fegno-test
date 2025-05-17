import { Star } from "lucide-react";
import { StarHalf } from "lucide-react";

interface StarRatingProps {
  rate: number;
  count: number;
}

export default function StarRating({ rate, count }: StarRatingProps) {
  const fullStars = Math.floor(rate);
  const hasHalfStar = rate - fullStars >= 0.25 && rate - fullStars < 0.75;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {Array.from({ length: fullStars }, (_, i) => (
          <Star
            key={`full-${i}`}
            className="h-4 w-4 fill-yellow-400 text-yellow-400"
          />
        ))}

        {hasHalfStar && (
          <StarHalf className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        )}

        {Array.from({ length: emptyStars }, (_, i) => (
          <Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />
        ))}
      </div>
      <span className="text-sm text-gray-500">({count})</span>
    </div>
  );
}

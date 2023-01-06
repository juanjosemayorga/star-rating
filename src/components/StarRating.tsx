import { Star } from './Star'

const createArray = (length: number) => [...Array(length)]

export interface StarRatingProps {
  totalStars?: number;
  style?: React.CSSProperties;
  selectedStars?: number;
  onRate?: (stars: number) => void;
}

export const StarRating = ({
  style = {},
  totalStars = 5,
  selectedStars = 0,
  onRate = () => { /* do nothing */ }
}: StarRatingProps) => {
  return (
    <div style={{ padding: '5px', ...style }}>
      {
        createArray(totalStars).map((_, index) => (
          <Star
            key={index}
            selected={selectedStars > index}
            onSelect={() => onRate(index + 1)}/>
        ))
      }
      <p>
        {selectedStars} of {totalStars}
      </p>
    </div>
  )
};

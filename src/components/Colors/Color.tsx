import { StarRating } from '../StarRating';
import { useColors } from '../../hook/useColors';

import { FaTrash } from 'react-icons/fa';

export const Color = ({
  id,
  color,
  title,
  rating,
}: IColor) => {
  const { removeColor, rateColor } = useColors();

  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => removeColor(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating
        selectedStars={rating}
        onRate={(rating: number) => rateColor(id, rating)} />
    </section>
  )
}

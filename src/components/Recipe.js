import PropTypes from 'prop-types';
import { BsClockFill, BsPieChartFill, BsBarChartFill } from 'react-icons/bs';

export const Recipe = ({
  item: { name, time, servings, calories, image, difficulty },
}) => {
  return (
    <div>
      <img src={image} alt={name} width="240" />
      <h2>{name}</h2>
      <ul>
        <li>
          <BsClockFill /> {time} min
        </li>
        <li>
          <BsPieChartFill /> {servings} servings
        </li>
        <li>
          <BsBarChartFill /> {calories} calories
        </li>
      </ul>
      <div>
        <span>Easy {difficulty === 'easy' && '(ACTIVE)'}</span>
        <span>Medium {difficulty === 'medium' && '(ACTIVE)'}</span>
        <span>Hard {difficulty === 'hard' && '(ACTIVE)'}</span>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
  }).isRequired,
};

import PropTypes from 'prop-types';
import { BsClockFill, BsPieChartFill, BsBarChartFill } from 'react-icons/bs';
import {
  Image,
  RecipeInfo,
  Wrapper,
  RecipeInfoItem,
  DifficultyBadges,
  Badge,
} from './Recipe.stlyed';
import { RecipeDifficulty } from 'constants';

export const Recipe = ({
  item: { name, time, servings, calories, image, difficulty },
}) => {
  return (
    <Wrapper>
      <Image src={image} alt={name} width="240" />
      <h2>{name}</h2>
      <RecipeInfo>
        <RecipeInfoItem>
          <BsClockFill /> {time} min
        </RecipeInfoItem>
        <RecipeInfoItem>
          <BsPieChartFill /> {servings} servings
        </RecipeInfoItem>
        <RecipeInfoItem>
          <BsBarChartFill /> {calories} calories
        </RecipeInfoItem>
      </RecipeInfo>
      <DifficultyBadges>
        <Badge
          active={difficulty === RecipeDifficulty.easy}
          type={RecipeDifficulty.easy}
        >
          Easy
        </Badge>
        <Badge
          active={difficulty === RecipeDifficulty.medium}
          type={RecipeDifficulty.medium}
        >
          Medium
        </Badge>
        <Badge
          active={difficulty === RecipeDifficulty.hard}
          type={RecipeDifficulty.hard}
        >
          Hard
        </Badge>
      </DifficultyBadges>
    </Wrapper>
  );
};

Recipe.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    difficulty: PropTypes.oneOf(Object.values(RecipeDifficulty)).isRequired,
  }).isRequired,
};

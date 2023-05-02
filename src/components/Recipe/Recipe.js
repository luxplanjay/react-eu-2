import { Component } from 'react';
import PropTypes from 'prop-types';
import { BsClockFill, BsPieChartFill, BsBarChartFill } from 'react-icons/bs';
import { HiTrash, HiZoomIn } from 'react-icons/hi';
import {
  Image,
  RecipeInfo,
  Wrapper,
  RecipeInfoItem,
  DifficultyBadges,
  Badge,
  Actions,
} from './Recipe.stlyed';
import { RecipeDifficulty } from 'constants';
import { ImageModal } from 'components/ImageModal/ImageModal';

export class Recipe extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const {
      item: { id, name, time, servings, calories, image, difficulty },
      onDelete,
    } = this.props;

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

        <Actions>
          <button aria-label="Delete" onClick={() => onDelete(id)}>
            <HiTrash />
          </button>
          <button aria-label="Zoom" onClick={this.openModal}>
            <HiZoomIn />
          </button>
        </Actions>
        <ImageModal
          isOpen={this.state.isModalOpen}
          onClose={this.closeModal}
          imageUrl={image}
        />
      </Wrapper>
    );
  }
}

Recipe.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    difficulty: PropTypes.oneOf(Object.values(RecipeDifficulty)).isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

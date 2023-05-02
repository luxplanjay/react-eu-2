import { RecipeDifficulty } from 'constants';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  border: 1px solid ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.radii.md};
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
`;

export const RecipeInfo = styled.ul`
  display: flex;
  gap: 4px;
  padding: 4px;
`;

export const RecipeInfoItem = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    color: ${p => p.theme.colors.accent};
  }
`;

export const DifficultyBadges = styled.div`
  display: flex;
  gap: 8px;
  padding: 4px;
`;

const getBadgeBgColor = p => {
  if (!p.active) {
    return p.theme.colors.white;
  }

  switch (p.type) {
    case RecipeDifficulty.easy:
      return 'green';
    case RecipeDifficulty.medium:
      return 'blue';
    case RecipeDifficulty.hard:
      return 'red';
    default:
      return null;
  }
};

export const Badge = styled.span`
  padding: 4px 8px;
  border-radius: ${p => p.theme.radii.sm};
  border: 1px solid ${p => p.theme.colors.black};
  color: ${p => (p.active ? p.theme.colors.white : p.theme.colors.black)};
  background-color: ${getBadgeBgColor};
`;

export const Actions = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 4px;
`;

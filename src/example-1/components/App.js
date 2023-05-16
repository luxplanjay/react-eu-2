import { useEffect, useState } from 'react';
import { RecipeList } from './RecipeList/RecipeList';
import initialRecipes from '../recipes.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { RecipeForm } from './RecipeForm/RecipeForm';

const getRecipes = () => {
  const savedRecipes = localStorage.getItem('recipes');
  if (savedRecipes !== null) {
    return JSON.parse(savedRecipes);
  } else {
    return initialRecipes;
  }
};

export const App = () => {
  const [recipes, setRecipes] = useState(getRecipes);

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  const addRecipe = newRecipe => {
    setRecipes(prevState => [...prevState, newRecipe]);
  };

  const deleteRecipe = recipeId => {
    setRecipes(prevState => prevState.filter(recipe => recipe.id !== recipeId));
  };

  return (
    <Layout>
      <RecipeForm onSave={addRecipe} />
      <RecipeList items={recipes} onDelete={deleteRecipe} />
      <GlobalStyle />
    </Layout>
  );
};

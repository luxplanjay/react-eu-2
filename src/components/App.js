import { RecipeList } from './RecipeList/RecipeList';
import initialRecipes from '../recipes.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Component } from 'react';
import { RecipeForm } from './RecipeForm/RecipeForm';
import { LOCALSTORAGE_KEY } from 'constants';

// render > cDM > setState > recipes state update > render > cDU > LS
// render > cDM > setState > recipes state update > render > cDU > LS

export class App extends Component {
  state = {
    recipes: [],
  };

  componentDidMount() {
    console.log('componentDidMount');
    const savedRecipes = localStorage.getItem(LOCALSTORAGE_KEY);
    if (savedRecipes !== null) {
      this.setState({ recipes: JSON.parse(savedRecipes) });
    } else {
      this.setState({ recipes: initialRecipes });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    if (prevState.recipes !== this.state.recipes) {
      localStorage.setItem(
        LOCALSTORAGE_KEY,
        JSON.stringify(this.state.recipes)
      );
    }
  }

  addRecipe = newRecipe => {
    this.setState(prevState => {
      return {
        recipes: [...prevState.recipes, newRecipe],
      };
    });
  };

  deleteRecipe = recipeId => {
    this.setState(prevState => {
      return {
        recipes: prevState.recipes.filter(recipe => recipe.id !== recipeId),
      };
    });
  };

  render() {
    console.log('render');
    return (
      <Layout>
        <RecipeForm onAdd={this.addRecipe} />
        <RecipeList items={this.state.recipes} onDelete={this.deleteRecipe} />
        <GlobalStyle />
      </Layout>
    );
  }
}

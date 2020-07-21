import React, {Component} from 'react';
import './App.css';
import FoodList from './FoodList';
import Favorites from './Favorites'

// const charactersURL = 'https://rickandmortyapi.com/api/character/'

class App extends Component {


  state = {
    recipes: [],
    favorites: []
  }

  componentDidMount(){
    this.getRecipes()
  }

  getRecipes = () => {
    console.log("howdy")
  }

  addToFavorites = (character) => {
    this.setState({
      favorites: [...this.state.favorites, character]
    })
  }

  render(){
  return (
    <div className="App">
      <Favorites favorites={this.state.favorites} />
      <RecipesList addToFavorites={this.addToFavorites} recipes={this.state.recipes} />
      <h2>recipes</h2>
    </div>
    );
  }
}

export default App;

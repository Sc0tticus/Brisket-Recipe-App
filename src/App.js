import React, { Component } from 'react';
import './App.css';
import FoodList from './FoodList';
import Favorites from './Favorites'

const recipesURL = 'http://localhost:3005/recipes'

class App extends Component {


  state = {
    recipes: [],
    favorites: []
  }

  componentDidMount() {
    this.getRecipes()
  }

  getRecipes = () => {
    fetch(recipesURL)
      .then(result => result.json())
      .then(response => this.setState({ recipes: response }))
  }


  addToFavorites = (recipe) => {
    this.setState({
      favorites: [...this.state.favorites, recipe]
    })
  }

  render() {
    return (
      <div className="App">
        <Favorites favorites={this.state.favorites} />
        {/* <RecipesList addToFavorites={this.addToFavorites} recipes={this.state.recipes} /> */}
        <FoodList recipes={this.state.recipes} addToFavorites={this.addToFavorites} />
        <h2>recipes</h2>
      </div>
    );
  }
}

export default App;

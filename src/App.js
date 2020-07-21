import React, { Component } from 'react';
import './App.css';
import FoodList from './FoodList';
import Favorites from './Favorites'
// import { Helmet } from 'react-helmet'
const recipesURL = 'http://localhost:3005/recipes'

// const TITLE = 'Risk it for the Brisket!!'

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
        {/* <Helmet>
        <title>{TITLE}</title>
        </Helmet> */}

        <Favorites favorites={this.state.favorites} />
        <FoodList recipes={this.state.recipes} addToFavorites={this.addToFavorites} />
      </div>
    );
  }
}

export default App;

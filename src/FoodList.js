import React from 'react';

function FoodList({recipes, addToFavorites}){
    const showRecipes = () => recipes.map(
      recipe => (
        <li>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} onClick={() => addToFavorites(recipe)}/>
        </li>
    ))

    return (
        <ul className="recipe-list">
            {showRecipes()}
        </ul>
    )
}

export default FoodList
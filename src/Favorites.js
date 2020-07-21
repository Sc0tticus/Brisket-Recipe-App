import React from 'react'

export default function Favorites({favorites}){
  const showRecipes = () => favorites.map(recipe => (
      <li>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} />
      </li>
  ))

  return (
      <ul className="favorites-list">
          {showRecipes()}
      </ul>
  )
}
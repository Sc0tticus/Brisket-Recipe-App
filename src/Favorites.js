import React from 'react'

export default function Favorites({favorites}){

  const showRecipes = () => favorites.map(recipe => (
      <li>
        <h2>character.name</h2>
        {/* <img src={character.image} /> */}
      </li>
  ))

  return (
      <ul className="favorites-list">
          {showRecipes()}
      </ul>
  )
}
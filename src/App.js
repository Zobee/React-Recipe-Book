import React, {useState, useEffect} from 'react';
import Recipes from './Components/Recipes';

import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('beef')
  const [recipes, setRecipes] = useState([])
  const [query, setQuery] = useState('')

  const APP_ID = process.env.REACT_APP_ID
  const APP_KEY = process.env.REACT_APP_KEY

  useEffect(() => {
    getRecipes()
  }, [query])

  let handleChange = (e) => { 
    let term = e.target.value
    setSearchTerm(term)
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    setQuery(searchTerm)
    setSearchTerm('')
  }

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits)
    console.log(data.hits);
  }


  return (
    <div className="App">
      <form className='search-form' onSubmit={(e) => handleSubmit(e)}>
        <input 
        type='text' 
        className='search-bar'
        placeholder='Search' 
        value={searchTerm}
        onChange={(e) => handleChange(e)}
        />
        <button className='search-button' type='submit'>Submit</button>
      </form>
      <div className='recipes'>
        {recipes.map(recipe => (
        <Recipes
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          img={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          fat={recipe.recipe.totalNutrients.FAT}
          protein={recipe.recipe.totalNutrients.PROCNT}
          carbs={recipe.recipe.totalNutrients.CHOCDF}
        />
      ))}
      </div>

    </div>
  );
}

export default App;

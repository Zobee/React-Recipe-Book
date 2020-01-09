import React from 'react'

function Recipes({title, calories, img, ingredients, fat, protein, carbs}) {

    let fatContent = ''
    fat === undefined ? fatContent = '??g' : fatContent = `${fat.quantity.toFixed(0)}${fat.unit}`

    let proteinContent = ''
    protein === undefined ? proteinContent = '??g' : proteinContent = `${protein.quantity.toFixed(0)}${protein.unit}`

    let carbContent = ''
    carbs === undefined ? carbContent = '??g' : carbContent = `${carbs.quantity.toFixed(0)}${carbs.unit}`
    return (
        <div className='recipe-display'>
            <h1>{title}</h1>
            <h3>Ingredients :</h3>
            <ul style={{textDecoration : 'none'}}>
                {ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
                ))}
            </ul>
            <h4>Calories : {calories.toFixed(0)}</h4>
                <div className='macros'>
                <h4>Macros:</h4>
                <p>Carbs : {carbContent}</p>
                <p>Fat : {fatContent}</p>
                <p>Protein : {proteinContent}</p>
                </div>


            <img src={img} alt='' />
        </div>
    )
}

export default Recipes

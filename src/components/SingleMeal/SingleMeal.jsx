import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useMeals from '../../hooks/useMeals';
import './SingleMeal.css'


const SingleMeal = () => {
    let { mealid } = useParams()
    const [meals, setMeals] = useMeals(`lookup.php?i=${mealid}`)
    const { strMeal, strInstructions, strMealThumb } = meals[0];
    return (
        <div className='singleMeal'>
            <img src={strMealThumb} alt="" />
            <p>{strInstructions}</p>
            <h4>{strMeal}</h4>
        </div>
    );
};

export default SingleMeal;
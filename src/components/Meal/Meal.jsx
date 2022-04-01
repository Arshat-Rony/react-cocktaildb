import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Meal.css'

const Meal = (props) => {
    const { meal, handleAddCartBtn } = props;
    const { strMealThumb, strMeal } = meal;
    let navigate = useNavigate()
    const handleSeeDetailBtn = (meal) => {
        navigate(`/meals/${meal.idMeal}`)
    }
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <h3>{strMeal}</h3>
            <div className="btn-box">
                <button onClick={() => handleAddCartBtn(meal)} className='detail'>Add to Cart</button>

                <button onClick={() => handleSeeDetailBtn(meal)} className='detail'>see Detail</button>

            </div>
        </div>
    );
};

export default Meal;
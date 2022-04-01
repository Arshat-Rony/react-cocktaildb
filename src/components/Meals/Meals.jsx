import React, { useState } from 'react';
import useCarts from '../../hooks/useCarts';
import useMeals from '../../hooks/useMeals';
import img from "../../Images/food.jpg"
import Cart from '../Carts/Cart';
import { addtoDb } from '../FakeDb/FakeDb';
import Meal from '../Meal/Meal';
import './Meals.css'
const Meals = () => {
    const [searchtext, setSearchtext] = useState("")
    const [meals, setmeals] = useMeals(`search.php?s=${searchtext}`)
    const [carts, setCarts] = useCarts(meals)
    console.log(carts)

    const handleAddCartBtn = (selectedMeal) => {
        console.log(selectedMeal.idMeal)
        let newCart = [];
        const exist = carts.find(meal => meal.idMeal === selectedMeal.idMeal)
        if (!exist) {
            selectedMeal.quantity = 1;
            newCart = [...carts, selectedMeal]
        } else {
            const rest = carts.filter(meal => meal.idMeal !== selectedMeal.idMeal);
            exist.quantity += 1
            newCart = [...rest, exist]
        }
        addtoDb(selectedMeal.idMeal)
        setCarts(newCart)
        console.log(newCart)
    }
    const searchFood = (e) => {
        setSearchtext(e.target.value)
    }


    return (
        <div className='meals-container'>
            <img src={img} alt="" />
            <div className="meals-detail">
                <h2>Hey! Are You Hungry?</h2>
                <h1>Offering best food for you</h1>
                <input onChange={searchFood} type="text" placeholder='Search Your Food' className='input' />
            </div>
            <div className='restaurent'>
                <div className='meals'>
                    {
                        meals.map(meal => <Meal key={meal.idMeal} meal={meal} handleAddCartBtn={handleAddCartBtn}></Meal>)
                    }
                </div>
                <div className='cart'>
                    <Cart cart={carts}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Meals;
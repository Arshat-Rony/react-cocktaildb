import React from 'react';
import './SingleOrder.css'

const SingleOrder = (props) => {
    const { strMeal, strMealThumb } = props.product;
    const price = Math.floor(100 + Math.random() * 200)
    return (
        <div className='singleorder'>
            <div className="singleorder-detail">
                <img src={strMealThumb} alt="" />
                <div className='text'>
                    <h1>{strMeal}</h1>
                    <p>Price : ${price}</p>
                </div>
            </div>
            <div>
                <button className='delete-btn'>X</button>
            </div>
        </div>
    );
};

export default SingleOrder;
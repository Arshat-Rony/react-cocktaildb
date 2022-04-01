import React, { useState } from 'react';
import useCarts from '../../hooks/useCarts';
import useMeals from '../../hooks/useMeals';
import Cart from '../Carts/Cart';
import SingleOrder from '../SingleOrder/SingleOrder';
import './Order.css'

const Order = () => {
    const [searchtext, setSearchtext] = useState("")
    const [meals, setmeals] = useMeals(`search.php?s=${searchtext}`)
    const [carts, setCarts] = useCarts(meals)
    console.log(carts)

    return (
        <div className='order-container'>
            <div className="orders">
                {
                    carts.map(product => <SingleOrder product={product} key={product.idMeal}></SingleOrder>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={carts}></Cart>
            </div>

        </div>
    );
};

export default Order;
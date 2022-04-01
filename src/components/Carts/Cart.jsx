import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    let count = 0;
    cart.forEach(element => {
        count += element.quantity;
    });
    return (
        <div className='cart'>
            <h3>Your added Item </h3>
            <h4>Total Added Item : {count}</h4>
        </div>
    );
};
export default Cart;
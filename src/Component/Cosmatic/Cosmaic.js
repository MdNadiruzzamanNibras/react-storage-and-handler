import React from 'react';
import { addToDB, removeCart } from '../utiltits/fakeDB';

const Cosmaic = (props) => {
    const{name, price, id} =props.cosmetic
    const addToCart=(id)=>{
        addToDB(id)
    }
    const removeToCart=id=>{
        removeCart(id)
    }
    return (
        <div>
            <h1>
               Name: {name}
            </h1>
           <p> Price:{price}</p>
            <p><small>Id: {id}</small></p>
            {/* <button onClick={addToCartWithParam}>add To Cart</button> */}
            <button onClick={()=>addToCart(id)}>Add To Cart</button>
            <button onClick={()=>removeToCart(id)}>remove To cart</button>
        </div>
       
    );
};

export default Cosmaic;
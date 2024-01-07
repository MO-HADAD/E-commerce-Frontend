import React, { useState } from 'react'
import {CartContext } from './context'
import { Product } from '../products'

export default function CartProvider(props) {
    let [cartProducts , setCartProducts]=useState([]);
    
    let[count,setCount]=useState(0)
    let increase = () =>{setCount(count+1)}
    let decrease = () =>{setCount(count-1)}

    let gettingCartProduct = (product)=>{
        setCartProducts([...cartProducts , product])
    };

    const removeFromCart = (product) => {
        let updatedCart = cartProducts.filter((p) => p.id !== product.id);
        decrease();
        setCartProducts(updatedCart);
      };

    let data ={cartProducts ,   gettingCartProduct ,removeFromCart,increase ,count}
  return (
    <CartContext.Provider value={data}>
      {props.children}

    </CartContext.Provider>
  )
}

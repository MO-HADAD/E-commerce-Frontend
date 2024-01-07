import React, { useState ,useEffect, useContext } from 'react'
import Table from 'react-bootstrap/Table';
import { CartContext } from '../context/context';

export default  function Cart() {

    
    // let [cartItems, setCartItems]=useState([]);

    // let gettingCartProduct = (product)=>{
    //     setCartProducts([...cartProducts , product])
    // };

    let {cartProducts ,   gettingCartProduct ,removeFromCart} = useContext(CartContext)


    
//   const removeFromCart = (product) => {
//     let updatedCart = cartProducts.filter((p) => p.id !== product.id);
//     gettingCartProduct(updatedCart);
//   };
  return (
    <div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th> Name</th>
          <th>price </th>
          <th>actions</th>
        </tr>
      </thead>
      <tbody>
        {cartProducts.map((product)=>{
            return      <tr key={product.id}>
                            <td>{product.id}</td>
                             <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td><button onClick={()=>removeFromCart(product)} className='btn btn-danger'>Remove</button></td>
         
                        </tr>


        })}


      </tbody>
    </Table>
    </div>
  )
}

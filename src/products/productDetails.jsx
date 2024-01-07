import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { getProductById } from '../Api/ProductsApi'
import axios from 'axios'

export  function ProductDetails() {
   const  {id} = useParams()
   let [product,setProduct]=useState({})
   useEffect(() =>{
    // setProduct(getProductById(id))

    const fetchData= async()=>{
        const response= await axios.get(`http://localhost:3005/products/${id}`)
        setProduct(response.data)
 
     }
     fetchData();
   },[])
   
  return (
    <div>{product?
        <>
        <img src={product.img} alt="" />
        <h3> product name : {product.name}</h3>
        <h4> price : {product.price}</h4>
        <h5>Discription:</h5>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem architecto perferendis commodi repellat ipsum error pariatur, accusantium ipsa itaque nostrum. Eaque quis ab cum delectus doloremque id, tempora accusantium magni!</p>
        </>: <h1>no pruct found</h1>
    }
    <NavLink to={'/products'} className='btn btn-success'>Back to Products</NavLink>
    </div>
  )
}

import React, { useContext, useEffect, useState } from 'react'
import {products} from '../models/products'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import'./productStyle.css'
import { NavLink } from 'react-router-dom';
import { getAllProducts } from '../Api/ProductsApi';
import { CartContext } from '../context/context';
import axios from 'axios';


export  function Product() {

  let {cartProducts ,   gettingCartProduct,increase} = useContext(CartContext)
  let[productList,setPrductList]=useState([])

  useEffect(() =>{
    // setPrductList(getAllProducts());
    const getFech= async()=>{
       const response= await axios.get("http://localhost:3005/products")
       setPrductList(response.data)

    }
    getFech();
  },[])
  let deleteFromServer = (id)=>{
    axios.delete(`http://localhost:3005/products/${id}`).then(()=>{
      let filteredList = productList.filter((product)=>{
        return product.id != id
      })
      setPrductList(filteredList);
    })

  }

  return (
    <div className='d-flex m-5 '>
      
        
        {productList && productList.map(product =>{
            return      <Card key={product.id}  style={{ width: '18rem', margin:'10px'}}>
                <Card.Img variant="top" src={product.img}/>
                <Card.Body>
                  <Card.Title> <NavLink to={`/products/${product.id}`}>{product.name}</NavLink></Card.Title>
                  <Card.Text>
                  {product.price}
                  </Card.Text>
                  {product.quantity==0?
                  <Button variant="danger">Sold out</Button>:<Button variant="primary">Buy Now</Button>}
                  <Button variant="success m-1"               
                  onClick={() => {
                const selectedProduct = {
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  quantity: product.quantity,
                };
               
                gettingCartProduct(selectedProduct);
                increase();
              }}>Add to Cart <i class="bi bi-cart"></i> </Button>
              <Button variant="danger" onClick={()=>deleteFromServer(product.id)}>Delete</Button>
              <NavLink className={'btn btn-outline-warning m-1'} to={`/products/${product.id}/edit`}>edit Product</NavLink>
                </Card.Body>
              </Card>
        })}
    </div>
  )
}

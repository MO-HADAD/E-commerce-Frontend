import React, { useEffect, useState } from 'react'
import { addNewProduct } from '../Api/ProductsApi';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';



export  function ProductForm() {

    let navigate =useNavigate()
    let {id} = useParams();

    let [product,setProduct]=useState({})
    

    useEffect(() =>{
        // setProduct(getProductById(id))
        if(id!=0){
            const fetchData= async()=>{
                const response= await axios.get(`http://localhost:3005/products/${id}`)
                setProduct(response.data)
                setFormValues(response.data)
         
             }
             fetchData();
        }
    

       },[])

    let [formValues,setFormValues]=useState({
        id:'',
        name:'',
        price:'',
        quantity:''
    })
   let formOperation = (e)=>{
    e.preventDefault();
    if(id==0){
        axios.post("http://localhost:3005/products",formValues).then(()=>{
            navigate('/products')
        })

    }else{
        axios.put(`http://localhost:3005/products/${id}`,formValues).then(()=>{
            navigate('/products')
        })

    }

    // console.log(formValues);
    // addNewProduct(formValues)
    


   }
   let getProductValue=(e)=>{
    setFormValues({
        ...formValues,
        [e.target.name] : e.target.value
    })

  

   }

  return (
    <div className='bg-light p-5 mt-5'>
        <div className='container'>
        <h1>{id == 0 ?'Add new Product':'Edit product'}</h1>
        <form action="" onSubmit={formOperation}>
        <input onChange={getProductValue} type="text" name='id' value={formValues.id} className='form-control mb-3' placeholder='Enter Product id' />

        <input onChange={getProductValue} type="text" name='name' value={formValues.name} className='form-control mb-3' placeholder='Enter Product name' />
        <input onChange={getProductValue} type="text" name='price' value={formValues.price} className='form-control mb-3' placeholder='Enter Product Price' />
        <input onChange={getProductValue} type="text" name='quantity' value={formValues.quantity} className='mb-3 form-control' placeholder='Enter Product Quantity' />
        <button className='mb-3 btn btn-outline-primary'>{id == 0 ?'Add new Product':'Edit product'}</button>
        
        </form>
        </div>
        
    </div>
  )
}

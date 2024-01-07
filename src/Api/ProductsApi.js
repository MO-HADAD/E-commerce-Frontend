import { products } from "../models/products";

function getAllProducts(){
    return products
}

function getProductById(id){
    return products.find((product)=>product.id == id)
}

function addNewProduct(product){
    products.push(product);
}

export{getAllProducts, addNewProduct,getProductById}
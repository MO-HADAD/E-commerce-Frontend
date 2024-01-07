import { useState } from "react"
import  products  from "../models/products"


export let useProducts = () =>{
    let [product] =useState(...products)

    return [product]
}
'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function page() {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/api/products')
        .then(res=>setProducts(res.data))
        .catch(err=>console.error(err))
},[])
  return (
    <div>
      <p className='font-bold'>Danh sách sản phẩm</p>
      {products
       .map((product:any)=>(
          <div key={product.id}>
            <p>{product.title}</p>
            </div>))}
    </div>
  )
}

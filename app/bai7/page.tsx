'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
export function getProducts(){
    return axios.get('https://fakestoreapi.com/products')
    .then(res=>res.data)
    .catch(err=>console.log(err))
}
export default function page() {
  const [products,setProducts]=useState([]);
  const [product,setProduct]=useState({
     min:0,
     max:0
  })
  useEffect(()=>{
    getProducts().then(setProducts);
  },[])
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=e.target;
    setProduct({...product,[name]:Number(value)})
  }
  const handleClick= async(e:React.FormEvent)=>{
    e.preventDefault();
    const {min,max}=product;
    const res=await axios.get('https://fakestoreapi.com/products')
    setProducts(res.data.filter((product:any) =>product.price>=min && product.price<=max))
  }
  return (
    <div>
      <form className='flex gap-[20px]' action="">
      <input required style={{border:'1px solid red',borderRadius:'5px'}} onChange={handleChange} type="number" name="min" id="" placeholder='Min' />
      <input required style={{border:'1px solid red',borderRadius:'5px'}} onChange={handleChange} type="number" name="max" id="" placeholder='Max' />
      <button onClick={handleClick} className='bg-green-500 text-white p-[5px] rounded-[5px]'>Tìm kiếm</button>
      </form>
      {products.map((product:any) =>(
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>Giá: {product.price}</p>
          <img src={product.image} alt={product.title} />
        </div>
      ))}
    </div>
  )
}

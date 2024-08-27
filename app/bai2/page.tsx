import React from 'react'
export async function getData(){
    const res=await fetch('https://fakestoreapi.com/products');
    const data=await res.json();
    return data;
}
export default async function page() {
    const products=await getData();
  return (
    <div>
      <p className='font-bold'>Danh sách sản phẩm</p>
      {products.map((p:any)=>(
        <div key={p.id}>
            <h3>{p.title}</h3>
            <p>Giá: {p.price}</p>
            <img src={p.image} alt={p.title} />
        </div>
      ))}
    </div>
  )
}

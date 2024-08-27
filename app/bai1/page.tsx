import React from 'react'
export async function getData(){
    const res=await fetch('https://jsonplaceholder.typicode.com/posts');
    const data=res.json();
    return data;  
}
export default async function page() {
    const posts=await getData();
  return (
    <div>
      <p className='font-bold'>List of Posts</p>
      {posts.map((p:any)=>(
        <div key={p.id}>
            <p>{p.title}</p>
        </div>
      ))}
    </div>
  )
}

'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function page() {
  const [users,setUsers]=useState([]);
  useEffect(()=>{
     axios.get('/api/users')
     .then(res=>setUsers(res.data))
  },[])
  return (
    <div>
      <p className='font-bold'>Danh sách</p>
      {users.map((user:any)=>(
        <ul key={user.id}>
          <li>Tên:{user.name}</li>
          <li>Email:{user.email}</li>
          <li>Địa chỉ:{user.address.city}</li>
          <br />
        </ul>
      ))}
    </div>
  )
}

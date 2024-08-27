import axios from 'axios'
import { error } from 'console'
import React from 'react'
export async function getData(){
    const res=await axios.get('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m');
    return res.data;
}
export default async function page() {
    const data:any=await getData();
    console.log(data);
  return (
    <div>
      {data.hourly.temperature_2m.map(((btn:any,index:any)=>(
          <div key={index}>
             <p>{btn}</p>
          </div>
      )))}
    </div>
  )
}

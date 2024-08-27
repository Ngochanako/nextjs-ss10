import axios from 'axios'
import React from 'react'
export async function getData(){
    try {
        const res=await axios.get('https://example.com/invalid-endpoint');
        return {data:res.data()};
    } catch (error:any) {
        if(error.response.status===404){
        return {error:"404-Trang không tồn tại"}
        }
        if(error.response.status===500){
            return {error:"500-Lỗi máy chủ"}
        }
        return { error: 'Đã xảy ra lỗi không xác định' };
    }
    
    
}
export default async function page() {
    const {data,error}=await getData();
    
    
  return (
    <div>
      {error?(
        <h1>{error}</h1>
      ):(
        <h1>Data: {JSON.stringify(data)}</h1>
      )}
    </div>
  )
}

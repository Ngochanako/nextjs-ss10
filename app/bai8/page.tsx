import React from 'react'
export async function getData(){
    const [users,todos]=await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users'),
        fetch('https://jsonplaceholder.typicode.com/todos')
    ])
    const usersData=await users.json();
    const todosData=await todos.json();
    const combinedData=todosData.map((todo:any)=>{
        const user=usersData.find((user:any)=>user.id==todo.userId);
        return {...todo,userName:user?user.name:'Unknow'}
    })
    return combinedData;
}
export default async function page() {
    const data=await getData();
  return (
    <div>
      {data.map((todo:any)=>(
        <div key={todo.id}>
            <p>{todo.title}</p>
            <p>User: {todo.userName}</p>
            <br />
        </div>
      ))}
    </div>
  )
}

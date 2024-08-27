//tạo ra các phuwong thức
export async function GET(){
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    return data;
}
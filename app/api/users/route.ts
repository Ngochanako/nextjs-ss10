import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(){
    const res=await axios.get('https://jsonplaceholder.typicode.com/users');
    return NextResponse.json(res.data);
}
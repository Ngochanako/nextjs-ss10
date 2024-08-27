import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(){
    const res=await axios.get(' https://fakestoreapi.com/products ');
    return NextResponse.json(res.data);
}
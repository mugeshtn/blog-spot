import { NextResponse } from "next/server"

export async function POST(req: Request){
    try{
        const {email, password} = await req.json()
        if(email === "user@gmail.com" && password === "user123"){
           return NextResponse.json(
            {message: "Successful Login"},
            {status: 200}
           )
        }
        return NextResponse.json(
            {error: "Invalid credentials"},
            {status: 401}
        )
    }catch(e: any){
        return NextResponse.json(
            { error: e.message || "Something went wrong"},
            { status: 500 } // Internal Server Error
          );
    }
}
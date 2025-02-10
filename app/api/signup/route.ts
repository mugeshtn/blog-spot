import { NextResponse } from "next/server";
import { IUser, UserModel as User } from "@/models/User";
import { hashPassword } from "@/utils/auth";
import mongoose from "mongoose";
import connectMongo from "@/utils/connectMongo";

export async function POST(req: Request) {
    await connectMongo();
    const session = await mongoose.startSession();
    session.startTransaction()
    try {
        
        const { name, email, password }:IUser = await req.json()

        //Input validation
        if (!name || !email || !password) {
            return NextResponse.json(
                { message: "All fields are required" },
                { status: 400 }
            );
        }
        //convert email to lower case
        const normalizedEmail = email.toLowerCase()

        //check if user already exists
        const existingUser = await User.findOne({email: normalizedEmail})
        if(existingUser){
            return NextResponse.json(
                { 'message': "User already exists" },
                { status: 409 }
            )
        };
        
        //Hashing password
        const hashedPassword = await hashPassword(password);

        //save new user
        await User.create({name, email: normalizedEmail, password: hashedPassword})
        await session.commitTransaction()
        session.endSession()

        return NextResponse.json(
            { 'message': "Signup successful" },
            { status: 200 }
        )
    }catch(e: any){
        await session.abortTransaction()
        session.endSession()

        return NextResponse.json(
            {error: e.message || "Something went wrong"},
            {status: 500}
        )
    }
}
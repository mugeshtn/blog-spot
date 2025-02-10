import mongoose, { Schema, Document, model } from "mongoose";

export interface IUser extends Document{
    name: string,
    email: string,
    password: string,
    createdAt?: Date;
}

export const reqStr = {
    type: String,
    required: true
}

const userSchema = new Schema<IUser> ({
    name: {
        ...reqStr, 
        unique: [true, 'Name is required'],
        trim: true,
        minlength: 2,
        maxlength: 50
    },
    email: {
        ...reqStr, 
        unique: [true, 'Email is required'],
        lowercase: true,
    },
    password: reqStr
}, {timestamps: true});

export const UserModel = mongoose.models.User || model<IUser>("User", userSchema);
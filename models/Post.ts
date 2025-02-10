import mongoose, { Schema, model, Document } from "mongoose";

export interface IPost extends Document{
    title: string;
    description: string;
    image_url: String;
    author: mongoose.Schema.Types.ObjectId;
    tags: string[];
    likes: number;
    status: "draft" | "published";
    createdAt?: Date;
}

const postSchema = new Schema<IPost>({
    title:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true
    },
    image_url: {
        type: String,
        default: ""
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    tags:{
        type: [String],
        default: []
    },
    likes: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        enum: ["draft", "published"],
        default: 'draft'
    }
}, { timestamps: true});


export const postModel = mongoose.models.Post || model<IPost>('Post', postSchema)
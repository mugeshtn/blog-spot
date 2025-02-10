"use client"

import UserHeader from "@/components/userHeader";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { IPost } from "@/models/Post";
import { useQuery } from "@tanstack/react-query";

const fetchUserPosts = async (): Promise<IPost[]> => {
    return axios.get(`${process.env.NEXT_PUBLIC_JSON_URL}/posts`)
        .then((response) => response.data)
}


const explorePosts: React.FC = () => {

    const { data: postData } = useQuery({
        queryKey: ['userPosts'],
        queryFn: () => fetchUserPosts(),
    })

    return (
        <>
            <UserHeader writePage={false} />
            <div className="flex flex-col px-9 mt-7 sm:px-32 p-10">
                {
                    postData && postData.map((post: IPost) => (

                        <div key={post.id} className="bg-gray-200 p-5  my-2 flex flex-col justify-center ">
                            <h2 className="text-xl font-bold">{post.title}</h2>
                            <div className="flex gap-1 mb-3 font-sans text-gray-500 text-xs font-semibold">
                                {post.tags.map((tag, index) => <small key={index}>{tag}{index !== post.tags.length - 1 ? "," : "."}</small>)}
                            </div>
                            <div className="flex gap-4">
                                <Image src="https://picsum.photos/100" alt={post.title} width={100} height={100} />
                                <p>{post.description}</p>
                            </div>
                        </div>
                    ))
                }
                {
                    !postData && <div className="flex flex-col justify-center items-center h-80">
                    <Image width={100} height={100} src='/assets/pencilpotscissorsdesk.png' alt="penstand"/>
                    <h1 className="text-sm m-2">No posts</h1>
                    <p className="text-xs text-gray-400">Posts that you create will show up here</p>
                </div>
                }
                <div>
                    <Link href="/blog/create">
                        <Image className='fixed bottom-10 right-10 block md:hidden' width={50} height={50} alt='plus' src="/assets/plus.png" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default explorePosts;
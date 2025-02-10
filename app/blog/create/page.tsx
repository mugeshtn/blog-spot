"use client"

import UserHeader from "@/components/userHeader";
import { useState } from "react";

const BlogEditor: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [tags, setTags] = useState<string>("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (image) {
      formData.append("image", image);
    }
    formData.append("tags", tags);

    console.log("Submitting blog post...");

    // Example API call
    // await fetch("/api/posts", { method: "POST", body: formData });
  };
  const iswrite:boolean = true;

  console.log(process.env.NEXT_PUBLIC_JSON_URL)

  return (
    <>
      <UserHeader writePage={iswrite}/>
      <div className="flex my-20">
        <div className="max-w-3xl mx-auto my-auto p-6 bg-gray-200  shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Write a Blog</h2>

          <input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border-2 border-gray-300 outline-none rounded mb-4"
          />

          <textarea
            placeholder="Write your blog here..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border-2 border-gray-300 outline-none  rounded mb-4"
            rows={8}
          ></textarea>

          <input type="file" accept="image/*" onChange={handleImageChange} className="mb-4" />

          <input
            type="text"
            placeholder="Tags (comma separated)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full p-2 border-2 border-gray-300 outline-none rounded mb-4"
          />

          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Publish
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogEditor;

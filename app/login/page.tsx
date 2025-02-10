"use client"

import { useRouter } from "next/navigation";
import React, { JSX, useState } from "react";
import { toast, ToastContainer } from "react-toastify";


export default function Login(): JSX.Element {
  
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("")
  
  const router = useRouter()

  const handleKey = (e:React.KeyboardEvent<HTMLButtonElement>) => {
    if(e.key == "Enter"){
      handleSubmit(e);
    }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch("api/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      res.ok ? toast.success("Login successful! Redirecting...") : toast.error(data.error || "Error");
      setTimeout(() => {
        if (res.ok) router.push("/explore");
      }, 1000);
    } catch (e: any) {
      toast.error(e.message || "Something went wrong");
    }finally{
      setEmail("")
      setPassword("")
    }
  };

  return (
    <div className="min-h-[83vh] xl:min-h-[86vh] p-14 bg-[#e8e8e8]">
      <div className="flex justify-center items-center min-h-[70vh] ">
        <div className="bg-transparent px-8 py-8 rounded-lg shadow-lg w-96 border-purple-400 border-2">
          <h2 className="font-pacifico text-3xl mb-4 text-center">Login</h2>
          <h3 className="text-center font-poppins mb-5 text-xs">You're one step away!</h3>
          <form className="flex flex-col items-center">
            <input type="email" value={email} placeholder="Email" className="input_style" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} placeholder="Password" className="input_style" onChange={(e) => setPassword(e.target.value)}/>
            <button className="btn_style" onClick={handleSubmit} onKeyDown={handleKey}>
              Login
            </button>
          </form>
          <p className="text-center mt-3 text-sm">
            Don't have an account? <a href="/signup" className="heading_text font-bold hover:text-[#e85cd3]">Sign Up</a>
          </p>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={3000} // Toast will auto close after 3 seconds
          hideProgressBar={true}
          draggable={false}
        />

      </div>
    </div>
  );
}

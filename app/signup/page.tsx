import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { JSX } from "react";

export default function Signup(): JSX.Element {
  return (
    <>
      <Header />
      <div className="flex-grow p-14 bg-[#e8e8e8] min-h-[83vh] xl:min-h-[86vh]">
      <div className="flex justify-center min-h-[70vh] items-center">
        <div className="bg-transparent px-8 py-8 rounded-lg shadow-lg w-96 border-purple-400 border-2">
          <h2 className="font-pacifico text-3xl mb-4 text-center">Sign Up</h2>
          <h3 className="text-center font-poppins mb-5 text-xs">You're one step away!</h3>
          <form className="flex flex-col items-center">
            <input type="text" placeholder="Full Name" name="name" className="input_style" required/>
            <input type="email" placeholder="Email" name="email" className="input_style" required/>
            <input type="password" placeholder="Password" name="password" className="input_style" required/>
            <input type="password" placeholder="Confirm Password" name="confirmPassword" className="input_style" required/>
            <button className="btn_style">
              Sign Up
            </button>
          </form>
          <p className="text-center mt-3 text-sm">
            Already have an account? <a href="/login" className="heading_text font-bold hover:text-[#e85cd3]">Login</a>
          </p>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  );
}

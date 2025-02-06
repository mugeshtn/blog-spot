export default function Login() {
    return (
      <div className="flex justify-center min-h-20 mt-10 p-14">
        <div className="bg-transparent px-8 py-8 rounded-lg shadow-lg w-96 border-purple-400 border-2">
          <h2 className="font-pacifico text-3xl mb-4 text-center">Login</h2>
          <h3 className="text-center font-poppins mb-5 text-xs">You're one step away!</h3>
          <form className="flex flex-col items-center">
            <input type="email" placeholder="Email" className="input_style" />
            <input type="password" placeholder="Password" className="input_style" />
            <button className="btn_style">
              Login
            </button>
          </form>
          <p className="text-center mt-3 text-sm">
            Don't have an account? <a href="/signup" className="heading_text font-bold hover:text-[#e85cd3]">Sign Up</a>
          </p>
        </div>
      </div>
    );
  }
  
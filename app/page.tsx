import Link from "next/link"

const Home: React.FC = () => {
    return (
        <div className="text-center">
            <h1 className=" mt-5 md:mt-14 text-3xl md:text-5xl p-5 lg:px-52 md:px-28 md:py-0 font-pacifico leading-relaxed md:leading-normal"><span className="text_gradient">Blogspot</span> helps share your thoughts, <span className="text_gradient">Inspire</span> the World!</h1>
            <p className="font-poppins md:text-lg text-sm md:px-56 px-4 mt-8"> Express yourself, connect with like-minded readers, and make an impact with your words.</p>
            <div>
                <Link href="/signup">
                    <button className="btn_style">Sign Up</button>
                </Link>
                <Link href="/login">
                    <button className="btn_style"><span className="invisible">_</span>Login<span className="invisible">_</span></button>
                </Link>
            </div>

        </div>
    )
}

export default Home

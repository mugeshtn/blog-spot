import Link from "next/link"

const Header = () => {
    return (
        <header className="p-3 text-center sm:text-left sm:ml-14 lg:ml-72 md:ml-52 ">
            <Link href="/"><h1 className='text-[#b5179e] font-pacifico text-xl'>Blogspot</h1></Link>
        </header>
    )
}

export default Header

import Link from 'next/link';

interface isWriteI{
    writePage: boolean
}

const UserHeader = ({writePage}: isWriteI) => {
    return (
        <header className={`fixed top-0 bg-white w-full pb-4 pt-2 z-0`}>
            <div className='flex justify-center md:justify-around'>
                <Link href="/explore"><h1 className='text-[#b5179e] font-pacifico pt-2 text-xl cursor-pointer'>Blogspot</h1></Link>
                <div className={`relative group pt-2 ${writePage ? "hidden": 'block'}`}>
                    <Link href="/blog/create">
                        <button className="font-poppins btn_post hidden md:inline">+ NEW POST</button>
                    </Link>
                    <small className="absolute right-5 text-xs text-white px-2 py-1  bg-gray-500 opacity-0 transition-all duration-300 transform translate-y-[30px] group-hover:opacity-100 group-hover:translate-y-[40px]">
                        Create a post
                    </small>
                </div>
            </div>
        </header>
    )
}

export default UserHeader;

import Link from "next/link";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { useState } from "react";
export default function divBar(){
    const [nav, setNav] = useState(false)
    function handleNav(){
        setNav(!nav)
    }
    return(
        <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300 custom-font ">
            <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-black">
                <Link href='/'>
                    <h1 className="font-bold text-4xl">CR7</h1>
                </Link>
                <ul className="hidden sm:flex">
                    <li className="p-4" >
                        <Link href="/">Home</Link>
                    </li >
                    <li className="p-4">
                        <Link href="/about">About</Link>
                    </li>
                </ul>
                {/*Mobile Button*/}
                <div onClick={handleNav} className={nav ? "block sm:hidden z-10  text-white" : "block sm:hidden z-10  text-black"}>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
                </div>
                {/*Mobile Menu*/}
                <div className={nav ? 
                "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center text-white ease-in duration-300" : 
                "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"}>
                    <ul>
                        <li className="p-4 text-5xl hover:text-gray-400">
                            <Link href="/">Home</Link>
                        </li >
                        <li className="p-4 text-5xl hover:text-gray-400">
                            <Link href="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>  
        </div>
        
    );
}
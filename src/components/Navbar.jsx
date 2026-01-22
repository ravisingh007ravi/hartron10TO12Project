import { useState } from 'react'
import { FaHome, FaBlog, FaChild } from "react-icons/fa";
import { GrRestroomMen, GrRestroomWomen } from "react-icons/gr";
import { FcAbout, FcBusinessContact } from "react-icons/fc";
import { CiLogin, CiLogout } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

export default function Navbar() {

    const [show, addvalue] = useState(true)
    const MenuData = [
        // { icons: <FaHome />, name: 'Home', link: '/' },
        // { icons: <GrRestroomMen />, name: 'Men', link: '/men' },
        // { icons: <GrRestroomWomen />, name: 'Women', link: '/women' },
        { icons: <FaChild />, name: 'Kids', link: '/kids' },
        { icons: <FcAbout />, name: 'About', link: '/about' },
        { icons: <FaBlog />, name: 'Blogs', link: '/blogs' },
        { icons: <FcBusinessContact />, name: 'contact Us', link: '/contact-us' },
    ]

    const Auth = [
        { icons: <CiLogin className="text-2xl" />, name: 'log In', href: '/log-in', css: 'bg-blue-400' },
        { icons: <CiLogout className="text-2xl" />, name: 'Sign Up', href: '/sign-up', css: 'bg-orange-900' },
    ]

    const openAndClose = () => {
        addvalue(!show)
    }

    return (
        <header className="py-5 px-10">
            <nav className="flex rounded-full justify-between items-center py-5 px-10 bg-amber-500 shadow-lg shadow-pink-400">

                {/* Logo  */}
                <h1 className="logo text-3xl"><a href="#">PureBuy</a></h1>

                {/* Menu Data  */}
                <ul className="hidden lg:flex gap-5 items-center navFontsLogo">
                    {
                        MenuData.map(({ icons, name, link }, key) => (
                            <a key={key} href={link}>
                                <li className="flex items-center gap-2 hover:bg-gray-600 hover:text-white px-3 py-1 rounded-md">
                                    {icons}
                                    <h2>{name}</h2>
                                </li>
                            </a>
                        ))
                    }

                </ul>

                {/* Auth  */}
                <div className="hidden lg:flex gap-5">
                    {
                        Auth.map(({ icons, name, href, css }, i) => (
                            <a key={i} href="#">
                                <button className={`${css} hover:scale-110 duration-300 font-bold text-white px-3 py-2 rounded-md flex items-center gap-2`}>
                                    {icons}
                                    {name}
                                </button>

                            </a>
                        ))
                    }
                </div>

                <div onClick={openAndClose} className="lg:hidden">
                    {show ? <FaBars /> : <IoCloseSharp />}
                </div>
            </nav>
        </header>
    )
}

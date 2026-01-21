import { FaHome, FaBlog, FaChild } from "react-icons/fa";
import { GrRestroomMen, GrRestroomWomen } from "react-icons/gr";
import { FcAbout, FcBusinessContact } from "react-icons/fc";



export default function Navbar() {
    const MenuData = [
        { icons: <FaHome />, name: 'Home', link: '/' },
        { icons: <GrRestroomMen />, name: 'Men', link: '/men' },
        { icons: <GrRestroomWomen />, name: 'Women', link: '/women' },
        { icons: <FaChild />, name: 'Kids', link: '/kids' },
        { icons: <FcAbout />, name: 'About', link: '/about' },
        { icons: <FaBlog />, name: 'Blogs', link: '/blogs' },
        { icons: <FcBusinessContact />, name: 'contact Us', link: '/contact-us' },
    ]

    return (
        <header className="py-5 px-10">
            <nav className="flex rounded-full justify-between items-center py-5 px-10 bg-amber-500 shadow-lg shadow-pink-400">

                {/* Logo  */}
                <h1 className="logo text-3xl"><a href="#">PureBuy</a></h1>

                {/* Menu Data  */}
                <ul className="flex gap-5 items-center navFontsLogo">
                    {
                        MenuData.map(({ icons, name, link }, index) => (
                            <a href={link}>
                                <li className="flex items-center gap-2 hover:bg-gray-600 hover:text-white px-3 py-1 rounded-md">
                                    {icons}
                                    <h2>{name}</h2>
                                </li>
                            </a>
                        ))
                    }

                </ul>

                {/* Auth  */}
                <div className="flex gap-5">
                    <button className="bg-blue-400 px-3 py-1 rounded-md"><a href="#">Sign Up</a></button>
                    <button className="bg-orange-400 px-3 py-1 rounded-md"><a href="#">Sign Up</a></button>
                </div>
            </nav>
        </header>
    )
}

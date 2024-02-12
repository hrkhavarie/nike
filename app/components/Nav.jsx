import Image from "next/image"
import { navLinks } from "../constants"

const Nav = () => {
  return (
   <header className="padding-x py-8 absolute z-10 w-full "> 
    <nav className="flex justify-between items-center max-container">
        <a href="/">
            <Image 
                src="/assets/images/header-logo.svg" 
                alt="logo"  
                width={129} 
                height={29}/>
        </a>

        <ul className="flex-1 flex justify-end items-center gap-16 px-10 max-lg:hidden">
            {
                navLinks.map(link=>(
                    <li key={link.label}>
                        <a className="font-montserrat leading-normal text-lg text-slate-gray" href={link.href}>{link.label}</a>
               
                    </li>
                ))
            }
            
        </ul>
        {/* <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
            <a href="/signin">Sign in</a>
            <span>/</span>
            <a href="/explore">Explore new</a>
        </div> */}
        <div className="hidden max-lg:block">
            <Image src="/assets/icons/hamburger.svg"
            width={25}
            height={25}
            alt="icons"
            />
        </div>
    </nav>
    </header>
  )
}

export default Nav
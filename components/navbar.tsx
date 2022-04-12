import Link from "next/link"
import React from "react"
import Script from 'next/script'

const Navbar = () => {
    return (
      <div>
        <nav className="flex flex-wrap items-center w-full justify-between pl-10 py-2 fixed bg-white top-0 z-50 shadow-md">      
            <Link href="https://appexert.com/"><a><img src="/logo.svg" alt="ACME" width="150" height="40" /></a></Link> 
            <div className="flex md:hidden">
              <button id="nav">
                <img className="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
                <img className="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" />
              </button>
            </div>      
            <div className="toggle hidden w-full md:w-auto pr-10 md:flex text-bold mt-5 md:mt-0 md:border-none">        
              <Link href="/companies"><a className="block md:inline-block text-dark-blue hover:text-600 px-3 py-3 md:border-none">Companies</a></Link>
              <Link href="https://appexert.com/developers"><a className="block md:inline-block text-dark-blue hover:text-600 px-3 py-3 md:border-none">Developers</a></Link>
              <Link href="https://appexert.com/posts"><a className="block md:inline-block text-dark-blue hover:text-600 px-3 py-3 md:border-none">Blogs</a></Link>
              <Link href="https://jobs.appexert.com/jobs"><a className="block md:inline-block text-dark-blue hover:text-600 px-3 py-3 md:border-none">Careers</a></Link>
              <button><Link href="https://appexert.com/companies/start-hiring"><a className="block bg-600 rounded md:inline-block text-white hover:bg-700 hover:text-blue-500 px-5 py-1.5">Hire Engineers</a></Link></button>
            </div>      
          </nav>
          <Script id="my-script"
            dangerouslySetInnerHTML={{
              __html: `document.getElementById("nav").onclick = function navbar() {
                const menu = document.getElementsByClassName("toggle");
                for (let i = 0; i < menu.length; i++) {
                  menu.item(i).classList.toggle("hidden");}};`,
            }}
          />
      </div>
      )
}

export default Navbar

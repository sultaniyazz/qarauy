import React from 'react'
import { navbar } from '../constant/Navbar'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex items-center gap-[1vw] max-md:gap-[2vw]'>
            {navbar.map((nav) => (
                <NavLink key={nav.id} to={nav.path} className={({ isActive }) => `text-[1.2vw] max-md:text-[4vw] font-medium  relative active:scale-95 hover-link ${isActive ? "active-link" : ""}`}> {nav.title} </NavLink>
            ))}
        </div>
    )
}

export default Navbar

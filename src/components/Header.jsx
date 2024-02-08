import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {

    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <div className="logo">
                        RestroGram
                    </div>
                    <div className="menu-icon" onClick={handleShowNavbar}>
                        <i class="fa-solid fa-bars"></i>
                    </div>
                    <div className={`nav-elements  ${showNavbar && 'active'}`}>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/menu">Menu</NavLink>
                            </li>
                            <li>
                                <NavLink to="/review">Review</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
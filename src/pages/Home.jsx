import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";

// Images
import logo from '../assets/logo.png';

// Animation
import LightSpeed from 'react-reveal/LightSpeed';

// Data
import HomeObj from '../data/home';

function Home() {

    const [open, setOpen] = useState(false);

    const navUl = useRef(null);

    function toggleMenu() {
        if (open) {
            navUl.current.style.left = "-50%";
        } else {
            navUl.current.style.left = "50%";
        }

        setOpen(!open)
    }

    return (
        <div className='home'>
            <main className='landing'>
                <header className="navbar">
                    <a href="/">
                        <img className="logo" src={logo} alt="logo" />
                    </a>
                    <div className="navbar-nav">
                        <ul className="nav-ul" ref={navUl}>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/events" className="nav-link">Events</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/result" className="nav-link">Results</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="hamburger" onClick={toggleMenu}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </header>
                <LightSpeed left>
                    <h1>{HomeObj.headline1}</h1>
                </LightSpeed>
            </main>
        </div>
    )
}

export default Home;

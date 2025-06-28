import React from 'react'
import './StyleNav.css'
import { Link } from 'react-router-dom'
function NavBarPage() {
    return (
        <>
            <nav class="navbar navbar-expand-lg " style={{ backgroundColor: "rgb(67, 67, 67)" }}> 
                <div class="container-fluid">
                    <a class="navbar-brand text-white mx-2" href="/">Me</a>
                    <button class="navbar-toggler navbardropdown" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 navlist">
                            <li>
                                <Link to='/' style={{ textDecoration: 'none', color: "white" }}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to='/about' style={{ textDecoration: 'none', color: "white" }}>
                                    About Me
                                </Link>
                            </li>
                            <li>
                                <Link to='/skill' style={{ textDecoration: 'none', color: "white" }}>
                                    Skills
                                </Link>
                            </li>
                            <li>
                                <Link to='/portfolio' style={{ textDecoration: 'none', color: "white" }}>
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link to='/contact' style={{ textDecoration: 'none', color: "white" }}>
                                    Contact Me
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default NavBarPage



import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (

        <nav className="navbar navbar-expand-sm bg-dark text-white">
            <div className="container-fluid">
                {/* <a href="./index.html" className="navbar-brand text-light">WeCare</a> */}
                <Link to="/" className='navbar-brand text-light'>WeCare</Link>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">+91 9999 9909</a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar
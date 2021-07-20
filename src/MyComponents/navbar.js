import React from 'react'
import './navbar.css';
import {Link} from "react-router-dom";
import logo from "./Images/logo.jpg"

export default function Navbar() {
    let username = "user_Default";
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="nav-container">
            <div className="container-fluid">
                <div className="brand"><img src={logo} alt="Sadda Adda" className="logo" width="70px"/></div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Dashboard</Link>
                        </li>
                        <li className="nav-item nav-signin">
                            <Link className="nav-link active" to="/Signin">Sign in</Link>
                        </li>
                        <li className="nav-item nav-signup">
                            <Link className="nav-link active" to="/Signup">Sign up</Link>
                        </li>
                    </ul>
                    <span className="nav-user-section">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person" id="dp" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                        </svg>  {username}
                    </span>
                </div>
            </div>
        </nav>
    )
}
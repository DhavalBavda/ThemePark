import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Navbar.css';
import menuicon from "../../../public/image/menu-icon.png"
import Logo from "/image/logo.png"

function Navbar() {



    return (
        <div>
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" href="#">Project name</Link>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="active"><Link href="#">Home</Link></li>
                            <li><Link href="#about">About</Link></li>
                            <li><Link href="#contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
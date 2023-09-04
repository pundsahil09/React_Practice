import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const myStyle = ({isActive}) => {
    return {
        backgroundColor : isActive ? 'red' : '',
        textDecoration: isActive ? 'underLine' : 'none',
        borderRadius: isActive ? '15px' : '',
        transition: isActive ? '0.5s ease' : ''
    }
}

function Navbar() {



    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark mb-1">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">ROUTINGS</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item m-2">
                                <NavLink className="nav-link active" style={myStyle} aria-current="page" to="/">HOME</NavLink>
                            </li>

                            <li className="nav-item m-2">
                                <NavLink className="nav-link" style={myStyle} aria-current="page" to="/About">ABOUT</NavLink>
                            </li>

                            <li className="nav-item m-2">
                                <NavLink className="nav-link" style={myStyle} aria-current="page" to="/Contact">CONTACT US</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
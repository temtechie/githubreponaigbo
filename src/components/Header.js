import React from 'react'
import './Header.css'

export default function Header() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">Igbo<span className='logo-coin'>Coin</span></div>
            <div className="navbar-menu">
                <ul>
                    <li>Market Cap</li>
                    <li>Pricing</li>
                    <li>Tracker</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className="navbar-login">
                <button>Login</button>
            </div>
        </nav>
    )
}

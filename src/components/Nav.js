import React from 'react'
import Logo from './Logo'


export default function Nav() {
    return (
        <div className="nav">
          <span><Logo /></span>
            <ul className="nav-links">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Pages</li>
                <li>Results</li>
            </ul>
            <ul className="links-login">
                <li>Login</li>
                <li>Sign Up</li>
            </ul>
        </div>
    )
}

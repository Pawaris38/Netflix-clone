import React from 'react'
import Netflix from './Netflix-logo.png'
import Avatar from './avatar.png'
import './Nav.css'
function Nav() {
    return (
        <div className="nav">
            <img 
            className="nav__logo" 
            src={Netflix}
            alt="Netflixlogo"/>
            <img className="nav__avatar" src={Avatar} alt="avatarlogo" />
        </div>
    )
}

export default Nav

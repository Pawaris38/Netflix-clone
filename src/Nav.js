import Netflix from './Netflix-logo.png'
import React , { useState , useEffect} from 'react'
import Avatar from './avatar.png'
import './Nav.css'


function Nav() {
    const [show,handleShow] = useState(false);
    useEffect(() =>{
        window.addEventListener("scroll",() =>{
            if(window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        });
        return ()=>{
            window.removeEventListener("scroll");
        };
    },[]);
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
            className="nav__logo" 
            src={Netflix}
            alt="Netflixlogo"/>
            <img className="nav__avatar" src={Avatar} alt="avatarlogo" />
        </div>
    )
}

export default Nav

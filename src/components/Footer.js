import React from 'react';
import './Footer.css';  
import {RiDiscordFill} from 'react-icons/ri';
import {FaTelegramPlane} from 'react-icons/fa';
import {FaRedditAlien} from 'react-icons/fa';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <div>
            <div className="footer-container">
                <div className="top-footer">
                    <div className="left-footer">
                        <h1>OTAKUWORLD</h1> 
                    </div>
                    <div className="right-footer">
                        <button id="discord"><RiDiscordFill size="1.5rem" /></button>
                        <button id="telegram"><FaTelegramPlane size="1.5rem"/></button>
                        <button id="reddit"><FaRedditAlien size="1.5rem"/></button>
                    </div>
                </div>
                <div className="bottom-footer">
                    <ul>
                        <li><Link to='/login'>HOME</Link></li>
                        <li><Link to='/animelist'>ANIMELIST</Link></li>
                        <li><Link to='/manga'>MANGA</Link></li>
                        <li><Link to='/popular'>POPULAR</Link></li>
                        <li><Link to='/contact  x'>CONTACT</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer

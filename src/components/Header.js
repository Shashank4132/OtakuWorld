import React, { Component } from 'react';
import "./Header.css";
import { FaSearch } from 'react-icons/fa';
import {BrowserRouter as Router, Link } from 'react-router-dom';

class Header extends Component {
  
    render() {
        return (
            <div className="header">
                <div className="header-container">
                    <div className="left">
                        <Link to='/'><h1>OtakuWorld</h1></Link>
                    </div>
                    <div className="center">
                        <div className="center-left">
                            <ul>
                                <li><Link to='/'>HOME</Link></li>
                                <li><Link to='/animelist'>ANIMELIST</Link></li>
                                <li><Link to='/manga'>MANGA</Link></li>
                                <li><Link to='/popular'>POPULAR</Link></li>
                                <li><Link to='/Contact'>CONTACT</Link></li>
                            </ul>
                        </div>
                        <div className="center-right">
                            <input type="text" placeholder="  Search"></input>
                            <button><FaSearch /></button>
                        </div>
                    </div>
                    <div className="right">
                        <Link to='/login'><button><div><p>Login</p></div></button></Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;
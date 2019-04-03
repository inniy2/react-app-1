import React from 'react';
import Nav from 'react-bootstrap/Nav';
// import { Nav } from 'react-bootstrap';

/*  ***************************
    This is the top black
*************************** */ 
const MyNavi = () => {
    return(
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#" >Bolt</a> 
            <ul className="navbar-nav px-3">
                <li className="nav-item text-nowrap">
                    <a className="nav-link" href="login.html">Log in</a>
                </li>
            </ul>
        </nav>
        
    );
}

export default MyNavi 

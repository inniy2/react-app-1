<<<<<<< HEAD
import React, { Component } from 'react'
import {
    NavLink
} from 'react-router-dom'
=======
import React from 'react'
>>>>>>> parent of d02ed9d... Button props and router added!

/*  ***************************
    This is the side menu component
    
*************************** */ 
<<<<<<< HEAD
class MySideMenu extends Component{

    constructor(props){
        super(props);
    }

    render(){
        const { appEventHandler } = this.props
        return(
                <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                    <div className="sidebar-sticky" style={{marginTop: '1.5em'}}>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <span data-feather="home"></span>
                                    <NavLink className="nav-link active" to='/dashboard'>Dash Board </NavLink>
                                    <span className="sr-only">(current)</span>
                                </li>
                                <li className="nav-item">
                                    <span data-feather="file" ></span>
                                    <NavLink  className="nav-link active" to='/history'>Alter history </NavLink>
                                </li>
                                <li className="nav-item">
                                    <button data-feather="file" name="mySiadeMunuButton" onClick={appEventHandler}>Alter history</button>
                                </li>
                            </ul>
                    </div>
                </nav>
        );
    }
=======
const MySideMenu = () => {
    return(
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky" style={{marginTop: '1.5em'}}>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" href="dashborad.html">
                            <span data-feather="home"></span>
                                Dashboard
                            <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="alterhistory.html">
                            <span data-feather="file"></span>
                            Alter history 
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
>>>>>>> parent of d02ed9d... Button props and router added!
}

export default MySideMenu
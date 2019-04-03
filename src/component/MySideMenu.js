import React, { Component } from 'react'
import {
    NavLink
} from 'react-router-dom'

/*  ***************************
    This is the side menu component
    
*************************** */ 
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
}

export default MySideMenu
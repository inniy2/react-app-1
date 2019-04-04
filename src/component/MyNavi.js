import React, { Component } from 'react';
import MyLogin from './MyLogin';

/*  ***************************
    This is the top black
*************************** */ 
class MyNavi extends Component {
    // <NavLink className="nav-link active" to='/login'>Log In</NavLink>
    constructor(props){
        super(props);
        this.state = {
        };
    };


    render(){
        return(
            <div>
                <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                    <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/" >Bolt</a> 
                    <ul className="navbar-nav px-3">
                        <li className="nav-item text-nowrap">
                            <button className="btn btn-big btn-primary" 
                                onClick={this.props.isLoggin ? this.props.logoutAction : this.props.openLoginModal}>
                                    {this.props.isLoggin ? "LOG OUT" : "LOG IN"}
                            </button>
                        </li>
                    </ul>
                </nav>
                <MyLogin show={this.props.show} closeLoginModal={this.props.closeLoginModal} loginAction={this.props.loginAction}/>
            </div>
        );
    };
    
}

export default MyNavi 

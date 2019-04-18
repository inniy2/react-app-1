import React, { Component } from 'react';

import TopNav from './component/TopNav';
import LeftNav from './component/LeftNav';
import DashboardPage from './component/DashboardPage';
import HistoryPage from './component/HistoryPage';
import LoginModal from './component/LoginModal';
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom';


class App extends Component {

    state = {
        isLogin: false,
        loginMoDalShow: false,
        userEmail: "",
        userPassword: "",
    };


    actionModal = () => {

        this.state.isLogin?
            // If user click log out botton
            this.setState(prevState => ({
                isLogin: !prevState.isLogin
            }))
        :
            // First rendering
            // If user click log in botton
            this.setState(prevState => ({
                loginMoDalShow: !prevState.loginMoDalShow
            }))
    };

    actionValueChange = event => {
        const { name, value } = event.target;

        name === 'submitButton'?
            // click login submit

            // TO-DO time out callback
            
            this.setState({
                isLogin: true,
                loginMoDalShow: false
            })
        :
            // email, password
            this.setState({
                [ name ]: value
            })
        
        
        
    };

    renderLoginModal = () => {
        return this.state.isLogin?
            // While login status 
            <LoginModal 
                isShow={false} 
                actionModal={this.actionModal}
                userEmail={this.state.userEmail}
                userPassword={this.state.userPassword}
                actionValueChange={this.actionValueChange}
            />
        :
            // First rendering
            // whenever email, password types
            // Not login status
            <LoginModal 
                isShow={this.state.loginMoDalShow} 
                actionModal={this.actionModal}
                userEmail={this.state.userEmail}
                userPassword={this.state.userPassword}
                actionValueChange={this.actionValueChange}
            />
    };
        
    

    render(){
        return(
            <div>
                <Router>
                    <TopNav>
                        <button name="loginButton" className="btn btn-big btn-primary" onClick={this.actionModal} >{this.state.isLogin? 'Log out':'Log in' }</button>
                        {this.renderLoginModal()}
                    </TopNav>
                    <div className="container-fluid" >
                        <div className="row">
                            <LeftNav>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" to='/dashboard'>
                                        <span data-feather="home"></span>
                                        Dash Board 
                                        <span className="sr-only">(current)</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/history'>
                                        <span data-feather="file"></span>
                                        Alter History
                                    </NavLink>
                                </li>
                            </LeftNav>
                            <main  role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                                <Route path='/' component={DashboardPage} exact/>
                                <Route path='/dashboard' component={DashboardPage} exact/>
                                <Route path='/history' component={HistoryPage} exact/>
                            </main>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }

}

export default App;
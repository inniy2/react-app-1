import React, { Component } from 'react';

import TopNav from './component/TopNav';
import LeftNav from './component/LeftNav';
import DashboardPage from './component/DashboardPage';
import HistoryPage from './component/HistoryPage';
import LoginModal from './component/LoginModal';
import AddAlterTableModal from './component/AddAlterTableModal';
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom';


class App extends Component {

    state = {
        isLogin: false,
        isLoginModalShow: false,
        isAddAlterMoDalShow: false,
        userEmail: "",
        userPassword: "",
    };


    actionModal = () => {
    
        if (this.state.isLogin){
            // If user click log out botton
            this.setState(prevState => ({
                isLogin: !prevState.isLogin
            }))
            
        }else {
            // First rendering
            // If user click log in botton
            this.setState(prevState => ({
                isLoginModalShow: !prevState.isLoginModalShow
            }))
        }
        
        
    };

    actionAddAlterModal = () => {
        
        if(this.state.isLogin){
            // if log in status then show add alter table modal
            this.setState(prevState => ({
                isAddAlterMoDalShow: !prevState.isAddAlterMoDalShow
            }))
        }else{
            // if use is not logged in show alert
            alert("You need to login first")
        }
 
    }

    actionValueChange = event => {
        const { name, value } = event.target;

        if(name === 'logInSubmitButton') {
            // click login submit
            // TO-DO Later call api
            setTimeout(()=> {
                console.log("login callbackup after 3 sec")
                this.setState({
                    isLogin: true,
                    isLoginModalShow: false
                })
            }, 3000);
            
        } else if (name === 'addAlterTableSubmitButton'){
            // click add alter table  submit
            // TO-DO Later call api
            setTimeout(()=> {
                console.log("add alter table  callbackup after 3 sec")
                this.setState({
                    isAddAlterMoDalShow: false
                })
            }, 3000);

        }else {
            // email, password
            this.setState({
                [ name ]: value
            })
        }
        
        
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
                isShow={this.state.isLoginModalShow} 
                actionModal={this.actionModal}
                userEmail={this.state.userEmail}
                userPassword={this.state.userPassword}
                actionValueChange={this.actionValueChange}
            />
    };
        

    renderAddAlterModal = () => {
        return <AddAlterTableModal 
            isShow={this.state.isAddAlterMoDalShow} 
            actionModal={this.actionAddAlterModal} 
            actionValueChange={this.actionValueChange}
        />
    }
    

    render(){
        // console.log("isAddAlterMoDalShow : ", this.state.isAddAlterMoDalShow)
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
                                <Route path='/'          render={(props) => <DashboardPage {...props} actionAddAlterModal={this.actionAddAlterModal}/>}  exact/>
                                <Route path='/dashboard' render={(props) => <DashboardPage {...props} actionAddAlterModal={this.actionAddAlterModal}/>}  exact/>
                                <Route path='/history' component={HistoryPage} actionAddAlterModal={this.actionAddAlterModal} exact/>
                            </main>
                            {this.renderAddAlterModal()}
                        </div>
                    </div>
                </Router>
            </div>
        );
    }

}

export default App;
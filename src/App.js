import React, { Component } from 'react';
import MyHeader from './component/MyHeader';
import MyNavi from './component/MyNavi';
import MyIndex from './component/MyIndex';
import {
    BrowserRouter as Router,
} from 'react-router-dom';

class App extends Component {
        
        constructor(){
            super();
            this.state = {
                isLoggin: false,
                show: false,
                isLoginModalOpened: false
            };
            this.handleOpenLoginModal = this.handleOpenLoginModal.bind(this);
            this.handleCloseLoginModal = this.handleCloseLoginModal.bind(this);
            this.handleLogin = this.handleLogin.bind(this);
            this.componentDidMount = this.componentDidMount.bind(this);
            this.handleLogout = this.handleLogout.bind(this);
        };

        handleOpenLoginModal(){
            this.setState({show : true })
        }

        handleCloseLoginModal(){
            this.setState({show : false  })
        }

        handleLogin(event){
            // if you are a user
            this.setState({isLoggin : true, show : false })
           
        }
        
        componentDidUpdate(){
            console.log("componentDidUpdate")
            
        }

        componentDidMount(){

            console.log("componentDidMount")
            //setTimeout(()=>this.setState({isLoggin : false, show : true }),3000)

            // TO-DO Render loading and if user login failes 

            // Some how to you need to send the data back to app for 
        }
        
       


        handleLogout(event){
            this.setState({isLoggin : false, show : false })
        }

        render(){
            return(
                <Router>
                    <div>
                        <MyHeader/>
                        <MyNavi 
                            show={this.state.show} 
                            isLoggin={this.state.isLoggin}
                            openLoginModal={this.handleOpenLoginModal}
                            closeLoginModal={this.handleCloseLoginModal}
                            loginAction={this.handleLogin} 
                            logoutAction={this.handleLogout}/>
                        <MyIndex/>
                    </div>
                </Router>
            );
        };
        

}

export default App;
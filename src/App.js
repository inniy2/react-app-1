import React, { Component } from 'react';
import MyHeader from './component/MyHeader';
import MyNavi from './component/MyNavi';
import MyIndex from './component/MyIndex';
<<<<<<< HEAD
import {
    BrowserRouter as Router,
} from 'react-router-dom';

class App extends Component {
        
        constructor(){
            super();
            this.state = {}
        };

       

        componentDidMount(){
            // console.log("componentDidMount")

            var myLocalStorage = window.localStorage;

            myLocalStorage.clear();

            myLocalStorage.setItem('userLocalStorageId','userLocalStorageId-5')

            var mySessionStorage = window.sessionStorage;
            mySessionStorage.setItem('userSessionStorageId', 'userSessionStorageId-5')

            // console.log(myLocalStorage.getItem('userLocalStorageId'))
            // console.log(mySessionStorage.getItem('userSessionStorageId'))
           
            //setTimeout(()=>this.setState({isLoggin : false, show : true }),3000)

            // TO-DO Render loading and if user login failes 

            // Some how to you need to send the data back to app for 
        }
        
       



        render(){
            return(
                <Router>
                    <div>
                        <MyHeader/>
                        <MyNavi/>
                        <MyIndex/>
                    </div>
                </Router>
            );
        };
        

=======
import MyFooter from './component/MyFooter';

const App = () => {
    return(
        <div>
            <MyHeader/>
            <MyNavi/>
            <MyIndex/>
        </div>
    );
>>>>>>> parent of d02ed9d... Button props and router added!
}

export default App;
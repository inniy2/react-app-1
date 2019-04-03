import React, { Component } from 'react';
import MySideMenu from './MySideMenu';
import MyContent from './MyContent';
import MyHistory from './MyHistory';
import MyLogin from './MyLogin';
import {
    Route,
} from 'react-router-dom';

/*  ***************************
    This is the Below top
*************************** */ 
class MyIndex extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
        this.handleEvent  = this.handleEvent.bind(this);
    }



    handleEvent(event){
        console.log("MyIdex parents was called");
        console.log(event.target.name)
        if(event.target.name === 'mySiadeMunuButton'){
           
        }
    }
    
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                        <MySideMenu appEventHandler={this.handleEvent}/>
                        <Route path='/' component={MyContent} exact/>
                        <Route path='/dashboard' component={MyContent} exact/>
                        <Route path='/history' component={MyHistory} exact/>
                        <Route path='/login' component={MyLogin} exact/>
                </div>
            </div>
        );
    }
}

export default MyIndex 

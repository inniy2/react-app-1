import React, { Component } from 'react';
import MySideMenu from './MySideMenu';

import {
    BrowserRouter as Router,
    Route
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
        if(event.target.name == 'mySiadeMunuButton'){
           
        }
    }
    
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <MySideMenu appEventHandler={this.handleEvent}/>
                </div>
            </div>
        );
    }
}

export default MyIndex 

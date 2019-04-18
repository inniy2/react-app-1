import React from 'react';
import MySideMenu from './MySideMenu';
import MyContent from './MyContent';
<<<<<<< HEAD
import MyHistory from './MyHistory';
import MyLogin from './MyLogin';
import {
    Route,
} from 'react-router-dom';
=======
>>>>>>> parent of d02ed9d... Button props and router added!

/*  ***************************
    This is the Below top
*************************** */ 
<<<<<<< HEAD
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
=======
const MyIndex = () => {
    return(
        <div className="container-fluid">
            <div className="row">
                <MySideMenu/>
                <MyContent/>
>>>>>>> parent of d02ed9d... Button props and router added!
            </div>
        </div>
    );
}

export default MyIndex 

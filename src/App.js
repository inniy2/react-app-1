import React, { Component } from 'react';

import TopNav from './component/TopNav';
import LeftNav from './component/LeftNav';
import DashboardPage from './component/DashboardPage';
import AlterHistoryPage from './component/AlterHistoryPage';
import LoginModal from './component/LoginModal';
import AddAlterTableModal from './component/AddAlterTableModal';
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';


class App extends Component {

    state = {
        isLogin: false,
        isLoginModalShow: false,
        isAddAlterMoDalShow: false,
        isAlertShow: false,
        userEmail: "",
        userPassword: "",
        modalAlterTransactionNo: 0,
        modalAlterShardName: "default",
        modalAlterDatabaseName: "",
        modalAlterTableName: "",
        modalAlterSyntax: "",
        modalAlterDate: "",
        modalAlterHour: "",
        tableDatas: [
            {
                alterTransactionNo: 1,
                alterExcuteDate: 'N/A',
                alterExcuteHour: 'N/A',
                alterShardName: 'order-euaaa',
                alterDatabaseName: 'taxiy_company',
                alterTableName: 'order',
                alterSyntax: 'N/A',
                alterTableSize: 'N/A',
                alterTableRows: 'N/A',
                alterETA: 'N/A',
                alterRegistrationDate: 'N/A',
                alterStatus: 'N/A',
                alterRequistor: 'N/A'
            }
        ],
        graghOption: {
            title:{
                text: "Alter - per day"
            },
            axisX: {
                valueFormatString: "MMM-DD",
                interval:1,
                intervalType: "day"
              },
            data: [
                {
                    type: "line",
            
                    dataPoints: [
                        { x: new Date(2019, 0, 1), y: 0 },
                        { x: new Date(2019, 0, 2), y: 0 },
                        { x: new Date(2019, 0, 3), y: 0 },
                        { x: new Date(2019, 0, 4), y: 0 },
                        { x: new Date(2019, 0, 5), y: 0 },
                        { x: new Date(2019, 0, 6), y: 0 },
                        { x: new Date(2019, 0, 7), y: 0 }
                    ]
            }]
        }
    };


    actionLoginModal = () => {
    
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

    actionAddAlterModal = alterTransactionNo  => {
        console.log(alterTransactionNo)
        // if log in status then show add alter table modal
        if(this.state.isLogin){
            
            this.setState(prevState => ({
                isAddAlterMoDalShow: !prevState.isAddAlterMoDalShow,
            }))

             // this will define click ADD or click Edit
            if (alterTransactionNo === 0){
                this.setState({
                    modalAlterTransactionNo: alterTransactionNo
                })    
            }else{

                // alterTransactionNo is not array number, it is data!!!
                // Get index number of array 
                let tableDatasIndex = this.state.tableDatas.findIndex((element)=>{return element.alterTransactionNo === alterTransactionNo})

                this.setState({
                    modalAlterTransactionNo: this.state.tableDatas[tableDatasIndex].alterTransactionNo,
                    modalAlterShardName: this.state.tableDatas[tableDatasIndex].alterShardName,
                    modalAlterDatabaseName: this.state.tableDatas[tableDatasIndex].alterDatabaseName,
                    modalAlterTableName: this.state.tableDatas[tableDatasIndex].alterTableName,
                    modalAlterSyntax: this.state.tableDatas[tableDatasIndex].alterSyntax,
                    modalAlterDate: this.state.tableDatas[tableDatasIndex].alterExcuteDate,
                    modalAlterHour: this.state.tableDatas[tableDatasIndex].alterExcuteHour,
                })
                
            }
            
    
        }else{
            // if use is not logged in show alert
            // alert("You need to login first")
            this.setState(prevState => ({
                isAlertShow: !prevState.isAlertShow
            }))
        }
 
    }

    actionAlert = () => {
        this.setState(prevState => ({
            isAlertShow: !prevState.isAlertShow
        }))
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
            // email, password, shardName ....
            this.setState({
                [ name ]: value
            })
        }
        
        
    };


    actionNav = event => {
        const { name, value } = event.target;
        console.log(name)
    }


    renderLoginModal = () => {
        return this.state.isLogin?
            // While login status 
            <LoginModal 
                isShow={false} 
                actionLoginModal={this.actionLoginModal}
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
                actionLoginModal={this.actionLoginModal}
                userEmail={this.state.userEmail}
                userPassword={this.state.userPassword}
                actionValueChange={this.actionValueChange}
            />
    };
        

    renderAddAlterModal = () => {

        return <AddAlterTableModal 
                    isShow={this.state.isAddAlterMoDalShow} 
                    actionAddAlterModal={this.actionAddAlterModal} 
                    actionValueChange={this.actionValueChange}
                    modalAlterTransactionNo={this.state.modalAlterTransactionNo}
                    modalAlterShardName={this.state.modalAlterShardName}
                    modalAlterDatabaseName={this.state.modalAlterDatabaseName}
                    modalAlterTableName={this.state.modalAlterTableName}
                    modalAlterSyntax={this.state.modalAlterSyntax}
                    modalAlterDate={this.state.modalAlterDate}
                    modalAlterHour={this.state.modalAlterHour} 
               />
    }
    
    renderAlert = () => {
        return (
            <>
                <Alert show={this.state.isAlertShow} variant="success">
                <Alert.Heading>How's it going?!</Alert.Heading>
                <p>
                    Please log in before you make any changes.<br></br>
                    Thank you.
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={this.actionAlert} variant="outline-success">
                        Close
                    </Button>
                </div>
                </Alert>
            </>
        )   
    }

    componentDidMount(){
        // TO-DO Later call api for get current schedule for alter
        /*
        this.setState({
            tableDatas: [
                {
                    alterTransactionNo: 1,
                    alterExcuteDate: '15-08-2019',
                    alterExcuteHour: '03',
                    alterShardName: 'ORDER-EU',
                    alterDatabaseName: 'taxify_compony',
                    alterTableName: 'order',
                    alterTableSize: '141G',
                    alterTableRows: '125,987,938 rows',
                    alterETA: '10H',
                    alterRegistrationDate: '20-07-2019',
                    alterStatus: 'Registerd',
                    alterRequistor: 'Sangsun'
                },
                {
                    alterTransactionNo: 2,
                    alterExcuteDate: '07-08-2019',
                    alterExcuteHour: '04',
                    alterShardName: 'ORDER-EU',
                    alterDatabaseName: 'taxify_compony',
                    alterTableName: 'order',
                    alterTableSize: '141G',
                    alterTableRows: '125,987,938 rows',
                    alterETA: '10H',
                    alterRegistrationDate: '21-07-2019',
                    alterStatus: 'Registerd',
                    alterRequistor: 'Sangsun'
                }
            ]
        })
        */
    }


    render(){
        // console.log(this.state.shardNameSelect)
        return(
            <div>
                {this.renderAlert()}
                <Router>
                    <TopNav>
                        <button name="loginButton" className="btn btn-big btn-primary" onClick={this.actionLoginModal} >{this.state.isLogin? 'Log out':'Log in' }</button>
                        {this.renderLoginModal()}
                    </TopNav>
                    <div className="container-fluid" >
                        <div className="row">
                            <LeftNav>
                                <li className="nav-item">
                                    <NavLink name='dashboard' className="nav-link active" to='/dashboard' onClick={this.actionNav}>
                                        <span data-feather="home"></span>
                                        Dash Board 
                                        <span className="sr-only">(current)</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink name='alterHistory' className="nav-link" to='/history' onClick={this.actionNav}>
                                        <span data-feather="file"></span>
                                        Alter History
                                    </NavLink>
                                </li>
                            </LeftNav>
                            <main  role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                                <Route path='/'          render={(props) => <DashboardPage {...props} 
                                    actionAddAlterModal={this.actionAddAlterModal}
                                    tableDatas={this.state.tableDatas}
                                    graghOption={this.state.graghOption}
                                />}  exact/>
                                <Route path='/dashboard' render={(props) => <DashboardPage {...props} 
                                    actionAddAlterModal={this.actionAddAlterModal}
                                    tableDatas={this.state.tableDatas}
                                    graghOption={this.state.graghOption}
                                />}  exact/>
                                <Route path='/history' render={(props) => <AlterHistoryPage {...props}
                                    tableDatas={this.state.tableDatas}
                                />}   exact/>
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
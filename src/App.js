import React from 'react';
import MyHeader from './component/MyHeader';
import MyNavi from './component/MyNavi';
import MyIndex from './component/MyIndex';
import {
    BrowserRouter as Router,
} from 'react-router-dom';

const App = () => {
    
        return(
            <Router>
                <div>
                    <MyHeader/>
                    <MyNavi/>
                    <MyIndex/>
                </div>
            </Router>
        );
        
}

export default App;
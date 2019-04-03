import React from 'react';
import MyHeader from './component/MyHeader';
import MyNavi from './component/MyNavi';
import MyIndex from './component/MyIndex';
import {
    BrowserRouter as Router,
} from 'react-router-dom';

const App = () => {
        // Chenge test in ubuntu <--    
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
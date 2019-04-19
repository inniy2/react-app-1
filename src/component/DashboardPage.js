import React from 'react';
import PropTypes from 'prop-types';
import MyCanvas from './MyCanvas';
import MyTable from './MyTable';

const DashBoardPage = ({ actionAddAlterModal }) => {
    return(
        <div>
            <MyCanvas/>
            <MyTable actionAddAlterModal={actionAddAlterModal} />
        </div>
    );
}
DashBoardPage.propTypes = {
    actionAddAlterModal: PropTypes.func.isRequired
}

export default DashBoardPage 

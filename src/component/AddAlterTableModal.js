import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const AddAlterTableModal = ({ 
    isShow, 
    actionModal, 
    actionValueChange,
    shardNameSelect}) =>
    <Modal show={isShow} onHide={actionModal}>
        <Modal.Header closeButton>
            <Modal.Title>ADD ALTER</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="inputShardName">Shard Name</label>
                        <select id="inputShardName" className="form-control"  name="shardNameSelect" value={shardNameSelect} onChange={actionValueChange}>
                            <option value="default">Choose...</option>
                            <option value="order-eu">ORDER-EU</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputDatabaseName">Database Name</label>
                        <input type="text" className="form-control" id="inputDatabaseName" placeholder="ex) taxify_company"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputTableName">Table Name</label>
                        <input type="text" className="form-control" id="inputTableName" placeholder="ex) order"/>
                        </div>
                    <div className="form-group">
                        <label htmlFor="inputAlterSyntax">Alter Syntax</label>
                        <textarea className="form-control" id="inputAlterSyntax" rows="10" placeholder="ex) ADD KEY `idx_user_id` (`user_id`)" ></textarea>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label htmlFor="inputAlterDate">Alter Date</label>
                        <input type="text" className="form-control" id="inputAlterDate" placeholder="ex) 15-08-2019"/>
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="inputAlterTime">Alter Time</label>
                        <input type="text" className="form-control" id="inputAlterTime" placeholder="ex) 23:39"/>
                        </div>
                    </div>
                </form>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button name="closeButton" variant="secondary" onClick={actionModal}>
            Close
            </Button>
            <Button name="addAlterTableSubmitButton" type='submit' variant="primary" className="btn btn-primary" 
                onClick={actionValueChange}
            >
                ADD
            </Button>
        </Modal.Footer>
    </Modal>;
AddAlterTableModal.propTypes = {
    isShow: PropTypes.bool.isRequired,
    actionModal: PropTypes.func.isRequired,
    actionValueChange: PropTypes.func.isRequired,
}



export default AddAlterTableModal
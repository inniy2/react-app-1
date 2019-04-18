import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const LoginModal = ({ 
    isShow, 
    actionModal, 
    actionValueChange,
    userEmail,
    userPassword }) => 
        <Modal show={isShow} onHide={actionModal}>
        <Modal.Header closeButton>
            <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="container">
                <div className="starter-template">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" name="userEmail" className="form-control"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                                value={userEmail}
                                onChange={actionValueChange}
                            />
                            
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" name="userPassword" className="form-control" id="exampleInputPassword1" placeholder="Password"
                                value={userPassword}
                                onChange={actionValueChange}
                            />
                        </div>
                        
                    </form>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button name="closeButton" variant="secondary" onClick={actionModal}>
            Close
            </Button>
            <Button name="submitButton" type='submit' variant="primary" className="btn btn-primary" 
                onClick={actionValueChange}
            >
                Login
            </Button>
        </Modal.Footer>
        </Modal>;
LoginModal.propTypes = {
    isShow: PropTypes.bool.isRequired,
    actionModal: PropTypes.func.isRequired,
    actionValueChange: PropTypes.func.isRequired,
    userEmail: PropTypes.string.isRequired,
    userPassword: PropTypes.string.isRequired
}

export default LoginModal
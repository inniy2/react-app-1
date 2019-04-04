import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const MyLogin = ({ show, closeLoginModal, loginAction }) => {
    // const { showState, handleClose } = props;

    return (
        <Modal show={show} onHide={closeLoginModal}>
            <Modal.Header closeButton>
                <Modal.Title>Log In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <div className="starter-template">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeLoginModal}>
                Close
                </Button>
                <Button variant="primary" className="btn btn-primary" onClick={loginAction}>
                Log In
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyLogin
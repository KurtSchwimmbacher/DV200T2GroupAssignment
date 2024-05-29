import { useState, useEffect, useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
import "../styles/AccountModal.css";
import { PersonCircle, ArrowRight, XLg } from 'react-bootstrap-icons';
import UserContext from './UserContext';
import Button from 'react-bootstrap/Button';

function AccountModal() {
    const [show, setShow] = useState(false);
    const { user, setUser } = useContext(UserContext);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, [setUser]);

    function handleLogout() {
        localStorage.removeItem('user'); // Remove user data from local storage
        setUser(null); // Reset user context
        handleClose();
    }

    return (
        <>
            <PersonCircle className='account-icon' size={38} onClick={handleShow} />
            
            <Modal className='modal' show={show} onHide={handleClose}>
                <Modal.Body className='modal-body'>
                    <XLg color='#FF6E1F' size={28} className='close-icon' onClick={handleClose} />
                    
                    {user ? (
                        <>
                            <h5 className='modal-title'>Welcome, {user.name}!</h5>
                            <Button variant='success' className='logout-btn' onClick={handleLogout}>Sign Out</Button>
                        </>
                    ) : (
                        <>
                            <h5 className='modal-title'>LOG IN TO VIEW ACCOUNT</h5>
                            <div className='modal-buttons'>
                                <Link to="/login" className='link-btn'>
                                    <h4 className='link-text'>Login</h4>
                                    <ArrowRight color='#FF6E1F' size={28} />
                                </Link>
                                <Link to="/signup" className='link-btn'>
                                    <h4 className='link-text'>Sign Up</h4>
                                    <ArrowRight color='#FF6E1F' size={28}/>
                                </Link>
                            </div>
                        </>
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
}

export default AccountModal;

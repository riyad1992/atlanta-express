import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAute from '../../../hooks/useAute';
import logo from '../../../images/atlanta-logo.png'
import './Header.css'

const Header = () => {
    const {user, logOut} = useAute()
    const [hasScrolled, setScrolled] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 50){
            setScrolled(true);
        }else {
            setScrolled(false)
        }
    }
    window.addEventListener('scroll', changeBackground);
    return (
        <>
            <Navbar className={hasScrolled ? 'navbar headerScrolled': 'navbar'} variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand className='text-primary' as={Link} to='/home'><img src={logo} alt='' style={{height:'20px'}}/> Atlanta Express</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#tour">Tours</Nav.Link>
                        {
                            user?.email ?<Nav.Link  as={Link} to="/mybooking">My booking</Nav.Link>:''
                        }
                        {
                            user?.email ?<Nav.Link  as={Link} to="/allbooking">Manage all booking</Nav.Link>:''
                        }
                        {
                            user?.email ?<Nav.Link  as={Link} to="/addservice">Add New Service</Nav.Link>:''
                        }
                        {user?.email ?
                            <Nav.Link  onClick={logOut} variant="light">Logout</Nav.Link> :
                            <Nav.Link  as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text className='text-warning'>
                            Signed in as: <a className='text-info' href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
//css
import './Navigation.css';
//img
import navLogo from '../../../images/logo/SD-logo.png';

const Navigation = () => {
    const { user, logOut, admin } = useAuth();
    return (
        <>
            <Navbar className="navbar fw-bolder" collapseOnSelect expand="lg" variant="dark" sticky="top">
                <Container>
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="nav-logo me-2">
                            <img src={navLogo} alt="" />
                        </div>
                        <Navbar.Brand
                            className="fw-bolder"
                            href="#home">SUPER <span className="nav-title">DELUXE</span></Navbar.Brand>
                    </div>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link
                            className="nav-item fw-bold" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link
                            className="nav-item fw-bold" as={Link} to="/products">Products</Nav.Link>
                        {
                            admin && <Nav.Link
                                className="nav-item fw-bold" as={Link} to="/addProducts">AddProducts</Nav.Link>}
                        {
                            user?.email && <Nav.Link
                                className="nav-item fw-bold" as={Link} to="/myOrders">My Orders</Nav.Link>}
                        <Nav.Link
                            className="nav-item fw-bold" as={Link} to="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link
                            className="nav-item fw-bold" as={Link} to="/register">Sign Up</Nav.Link>
                        {
                            user?.email ?
                                <button
                                    onClick={logOut}
                                    className="btn btn-secondary me-2">Logout</button>
                                :
                                <Nav.Link
                                    className="nav-item fw-bold"
                                    as={Link} to="/login">Login</Nav.Link>
                        }

                        <Navbar.Text>
                            {/* {user?.email &&
                                <span className="me-2 p-color"><a href="#login"><span className
                                    ="user">{user?.displayName}</span></a></span>
                            } */}
                            {user?.email &&
                                <span className="profile-img"><img src={user?.photoURL} alt="" /></span>
                            }
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;
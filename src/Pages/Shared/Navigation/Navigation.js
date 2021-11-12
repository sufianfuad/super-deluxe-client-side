import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
//css
import './Navigation.css';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand
                        className="fw-bolder"
                        href="#home">SUPER<span className="nav-title">DELUXE</span></Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="nav-item fw-bold" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="nav-item fw-bold" as={Link} to="/products">Products</Nav.Link>
                        <Nav.Link className="nav-item fw-bold" as={Link} to="/addProducts">AddProducts</Nav.Link>
                        <Nav.Link className="nav-item fw-bold" as={Link} to="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link className="nav-item fw-bold" as={Link} to="/register">Register</Nav.Link>
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
                            {user?.email &&
                                <span className="me-2 p-color"><a href="#login"><span className
                                    ="user">{user?.displayName}</span></a></span>
                            }
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
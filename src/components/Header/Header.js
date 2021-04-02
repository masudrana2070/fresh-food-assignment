import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div class="header">
            <Container>
                <nav class="navbar navbar-expand-lg bg-secondary ">
                    <div class="container-fluid">
                        <p class= "shop-header">Food Shop</p>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav  ml-auto ">
                                <li class="nav-item p_right">
                                    <Link to="/home">Home</Link>
                                </li>
                                <li class="nav-item p_right">
                                    <Link to="/orders">Orders</Link>
                                </li>
                                <li class="nav-item p_right">
                                    <Link to="/admin">Admin</Link>
                                </li>
                                <li class="nav-item p_right">
                                    <Link to="/login">Login</Link>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>
            </Container>

        </div>
    );
};

export default Header;
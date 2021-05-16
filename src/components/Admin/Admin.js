import { faPlus, faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Admin.css'

const Admin = () => {
    return (
        <div >
        <div className="sidebar">
            <Container>
                <Link to="/addFood">
                    <FontAwesomeIcon icon={faPlus} /> Add Food
                </Link>
                <Link to="/manageProduct">
                    <FontAwesomeIcon icon={faTasks} /> Manage Product
                </Link>
            </Container>
        </div>
        <Container>
            <h1 style={{ textAlign: "center"}}>
                Welcome Admin
            </h1>
        </Container>
    </div>
    );
};

export default Admin;
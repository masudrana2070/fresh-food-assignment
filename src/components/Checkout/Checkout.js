import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Checkout.css'

const Checkout = () => {

    const {_id} = useParams();
    const [food , setFood] = useState([]);

    useEffect(() =>{
        const url = `http://localhost:5055/addProduct/${_id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=> setFood(data))
    }, [_id])

    const { name, price} = food; 
    return (

        <Container>
            <div className="admin">
            <h1>This is checkout</h1>
            <p>Product ID: {_id}</p>
            <p>{name}</p>
            <p>{price}</p>
        </div>   
        </Container>
 
    );
};

export default Checkout;
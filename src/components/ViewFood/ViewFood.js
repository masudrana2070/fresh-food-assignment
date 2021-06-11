import React from 'react';
// import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import './ViewFood.css'

const ViewFood = (props) => {
   
    const {food} = props
    const {_id, name, imageURL, price } = food;
    

    return (

        <Card style={{ width: '18rem' }} className="container mb-4 mt-4 border-card" >
            <Card.Img variant="top" src={imageURL} />
            <Card.Body>
                <Card.Title className= "text-center">{name}</Card.Title>
                <Card.Text className = "font-weight-bold"> ${price} 
                <Button className = "margin" variant="primary" as = {Link} to = {`checkout/${_id}`}>Buy now</Button></Card.Text>
                
            </Card.Body>
        </Card>
       
    );
};

export default ViewFood;
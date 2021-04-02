import React from 'react';
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './ViewFood.css'

const ViewFood = ({food}) => {

    const [item, setItem] = useState([]);
    const {_id} = food;
    const history = useHistory();
    const handleBuy =(_id)=>{
        // const url = `/foods/${_id}`;
        history.push(`/checkout/${_id}`);
        // console.log(id)
    }
   

    return (

        <Card style={{ width: '18rem' }} className="container mb-4 mt-4" >
            <Card.Img variant="top" src={food.imageURL} />
            <Card.Body>
                <Card.Title className= "text-center">{food.name}</Card.Title>
                <Card.Text className = "font-weight-bold"> ${food.price} <Button className = "margin" variant="primary" onClick={()=>handleBuy(_id)}>Buy now</Button></Card.Text>
                
            </Card.Body>
        </Card>
       
    );
};

export default ViewFood;
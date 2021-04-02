
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const Orders = () => {
    const {_id} = useParams();
        const [order, setOrder] = useState([]);
    useEffect(()=>{
        fetch(`https://agile-citadel-44655.herokuapp.com/foods/${_id}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setOrder(data)
        })
    }, [_id]);
    

    const handleDelete = () => {
        console.log('Delete the product');
    }
    return (
      <Container>
            <div className="App mt-5 admin-form">
            {/* <h2>Order_id: {_id}</h2> */}
            <h5>Order name: {order.name}</h5>
            <p><img className="image" src={order.imageURL} alt=""/></p>
            <p className="mb-5">Order price: {order.price} SEK</p>
            <Button variant="danger" onClick={handleDelete}> Delete </Button>{' '}
            {/* <Button variant="success" >Betala nu </Button>{' '} */}
        </div>
      </Container>
    );
};

export default Orders;
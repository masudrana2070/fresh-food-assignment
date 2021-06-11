
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';

import {  useParams } from 'react-router';
import { UserContext } from '../../App';
import './Checkout.css'

const Checkout = () => {

  const { _id } = useParams();
  const [food, setFood] = useState([]);
  const [signInUser] = useContext(UserContext);

  useEffect(() => {
      fetch(`http://localhost:5055/product/${_id}`)
          .then((res) => res.json())
          .then((data) => setFood(data))
          .catch((err) => console.log(err));
  }, [_id]);

  const checkOutProduct = food.find(
      (pd) => parseInt(pd._id) === parseInt(_id)
  );

  const handleOrder = () => {
      const newOrder = {
          name: checkOutProduct?.name,
          price: checkOutProduct?.price,
          image: checkOutProduct?.imageURL,
          orderTime: new Date(),
          ...signInUser
      };

      const url = "http://localhost:5055/addOrder";
      axios.post(url, {
        email: signInUser.email,
        name: newOrder.name,
        price: newOrder.price,
        image: newOrder.image,
        date: newOrder.orderTime
      })
      .then(function(response) {
        
        alert("Your products ordered Successfully!")
      })
      .catch(function(err) {
        console.log(err)
      })
     
  };

  return (
      <Container className="checkout">
          <div className="d-flex justify-content-between">
              <h2>Name</h2>
              <h2>Image</h2>
              <h2>Price</h2>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
              <h4>{checkOutProduct?.name}</h4>
              <img style = {{height:'80px'}} src= {checkOutProduct?.imageURL} alt="" />
              <h4>$ {checkOutProduct?.price}</h4>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
              <h4>Total Price</h4>
              <h4>$ {checkOutProduct?.price}</h4>
          </div>
          <br />
          <Button onClick={handleOrder} variant="outline-primary">
              Checkout
          </Button>
      </Container>
  );


};

export default Checkout;



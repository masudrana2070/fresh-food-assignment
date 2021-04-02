// import { Button } from 'bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
import './Checkout.css'

const Checkout = () => {
    const {_id} = useParams();
    
    // const {_id, name, price} = {food}
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        fetch(`https://agile-citadel-44655.herokuapp.com/foods/${_id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setProduct(data)
        })
    }, []);

    // Context from app.js
  // const [signInUser, setSignInUser] = useContext(UserContext);

  // React hook form for extra form validation and error message
  // const { register, handleSubmit, errors } = useForm();

  // handle redirected to user task
  // let history = useHistory();
  // function handleUserTask() {
  //   history.push('/userDashboard');
  // }

  // When user registered send the data to server and redirect user to UserDashboard
//  const onSubmit = (data) => {
//    const newOrder = { ...data };
  

//    fetch('https://strawberry-cupcake-78732.herokuapp.com/addOrder', {
//      method: 'POST',
//      headers: { 'Content-Type': 'application/json' },
//      body: JSON.stringify(newOrder),
//    })
//      .then((res) => res.json())
//      .then((data) => {
//        if (data) {
//          handleUserTask();
//        }
//      });
//  };
let history = useHistory();
const handleOrder = (_id) =>{
  console.log('View Order')
  history.push(`/orders/${_id}`);
}
       return (
      <Container>
          <div className="App mt-5 admin-form">
            <h2>Check Product</h2>
            {/* <h3>Name:{product._id} </h3> */}
            {/* <p>Id: {_id}</p> */}
            <h5>Name: {product.name}</h5>
            <p><img className ="image" src={product.imageURL} alt=""/></p>
            <p>Price: {product.price} SEK</p>
            <Button variant="primary" onClick={()=>handleOrder(_id)}>Show Orders</Button>{' '}
            <Button variant="success">Pay Now</Button>{' '}
        </div>
      </Container>
    );
};

export default Checkout;



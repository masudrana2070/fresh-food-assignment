
import React, { useContext, useEffect, useState } from 'react';

import { UserContext } from '../../App';
import OrderDetails from '../orderDetails/OrderDetails';
import './Orders.css'


const Orders = () => {

    const[ orders, setOrders] = useState([]);
    const[signInUser] = useContext(UserContext)

    useEffect(()=>{
        fetch("http://localhost:5055/orders?email="+ signInUser.email)
        .then(res=>res.json())
        .then(data=> setOrders(data))
        .catch(err=>console.log(err))
    },[signInUser.email])
    
    return (
      <div className = "mt-5 container">
          <h1 style ={{textAlign: "center"}}>Your Orders Here</h1>
          <br />
          <br />

<div className = "container border bg-info fw-bold p-2 ">
    <div className = "row" >
        <div className = "col">
            Email Address
        </div>
        <div className = "col">
            Product Name
        </div>
        <div className = "col">
            Price
        </div>
        <div className = "col">
            Date
        </div>

    </div>

</div>
         
          {
              orders.map(order=> <OrderDetails key = {order._id} order = {order}></OrderDetails>)
          }
          
      </div>
    );
};

export default Orders;
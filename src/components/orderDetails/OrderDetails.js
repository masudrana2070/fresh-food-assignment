import React from 'react';


const OrderDetails = (props) => {

const { order} = props;
const {name, email, price, date} = order;
    return (
<div>
<div className = "container mt-2 bg-light border border-info">
    <div className = "row" >
        <div className = "col">
           {email}
        </div>
        <div className = "col">
            {name}
        </div>
        <div className = "col">
           {price} Taka
        </div>
        <div className = "col">
        {new Date(date).toDateString('yyyy-MM-dd')}
        </div>   
    </div>
</div>
    {/* <div className = "justify-content-center" >

<button >Delete</button>
    </div> */}
</div>
  
       
    );
};

export default OrderDetails;
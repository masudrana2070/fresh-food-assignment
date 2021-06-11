import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import ViewFood from '../ViewFood/ViewFood';



const Home = () => {

     const [foods, setFoods] = useState([])

     useEffect(()=>{
        fetch('http://localhost:5055/foods')
        .then(res=>res.json())
        .then(data=>setFoods(data))
     }, [])

  
    
    return (
      <Container>
        <div className ="row">
            {
                foods.map(food =><ViewFood key = {food._id} food={food}></ViewFood>)
            }
        </div>
      </Container>
 
    
    );
};

export default Home;
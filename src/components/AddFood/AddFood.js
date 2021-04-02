import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddFood.css'


const AddFood = () => {
    const { register, handleSubmit} = useForm();
    const [imageURL, setIMageURL] = useState(null);

    

    const onSubmit = data =>{ 
        console.log(data)
        const eventData = {
            name: data.name,
            price: data.price,
            imageURL: imageURL
        };

        const url = `http://localhost:5055/addFoods`;
    // console.log(eventData);

    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
      .then(res => console.log('server side response', res))
  };
    const handleImageUpload = event =>{
        console.log(event.target.files[0]);

        const imageData = new FormData();
        imageData.set('key', 'cbfcbb48a2245413fab6d60c2275ce22');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
        imageData)
        .then(function (response) {
            // console.log(response.data.data.display_url);
        setIMageURL(response.data.data.display_url);
        })
        .catch(function (error) {
          console.log(error);
        });
    }


    return (
        <div>
<Container>
    <Row>
    <Col className="col-md-3 product-design mt-5">
                    <h5  className="pb-4" style={{cursor: 'pointer'}}>Manage Product</h5>
                    <h5 className="pb-4"  style={{cursor: 'pointer'}}>Add Product</h5>
                    <h5 style={{cursor: 'pointer'}}>Edit Product</h5>
                </Col>

    <Col className="col-md-9 mt-5">
        <div className = "admin">
        <h4>Add Product by Administrator</h4>       
    <form onSubmit={handleSubmit(onSubmit)}>
   
      <input name="name" placeholder= "ProductName" ref={register} />
      <br></br>
      <br></br>
      <input name="price" placeholder= "ProductPrice" ref={register} />
      <br></br>
      <br></br>
      <input name="picture" type = "file" onChange={handleImageUpload}    />
      <br></br>
      <input type="submit" />
    </form>
        </div>
    
        </Col>
    </Row>
</Container>

            
     
        </div>
    );
};

export default AddFood;
import { faPlus, faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './AddFood.css'


const AddFood = () => {
    const { register, handleSubmit, errors} = useForm();
    const [imageURL, setIMageURL] = useState(null);

    

    const onSubmit = data =>{ 
        console.log(data)
        const eventData = {
            name: data.name,
            price: data.price,
            imageURL: imageURL
        };

        const url = `http://localhost:5055/addFoods`;


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
      <div className="sidebar">
          <Link to="/addFood">
              <FontAwesomeIcon icon={faPlus} /> Add Food
          </Link>
          <Link to="/manageProduct">
              <FontAwesomeIcon icon={faTasks} /> Manage Product
          </Link>
      </div>
      <div className="content">
          <form onSubmit={handleSubmit(onSubmit)}>
              <Container style={{ marginTop: "60px" }}>
                  <Row>
                      <Col md={6}>
                          <h5>Product Name</h5>
                          <input
                              name="name"
                              className="form-control"
                              placeholder="Enter Name"
                              ref={register}
                              required
                          />
                      </Col>
                      <Col md={6}>
                          <h5>Add Price</h5>
                          <input
                              name="price"
                              className="form-control"
                              placeholder="Enter Price"
                              ref={register}
                              required
                          />
                      </Col>
                     
                      
                      <Col md={6} style={{ marginTop: "30px" }}>
                          <h5>Add Photo</h5>
                          <input
                              name="exampleRequired"
                              type="file"
                              onChange={handleImageUpload}
                              required
                          />
                          {errors.exampleRequired && (
                              <span>This field is required</span>
                          )}
                      </Col>
                      <Col
                          style={{
                              marginTop: "50px",
                              textAlign: "end",
                          }}
                      >
                          <input type="Submit" />
                      </Col>
                  </Row>
              </Container>
          </form>
      </div>
  </div>
//         <div>
// <Container>
//     <Row>
//     <Col className="col-md-3 product-design mt-5">
//                     <h5  className="pb-2" style={{cursor: 'pointer'}}>Manage Product</h5>
//                     <h5 className="pb-2"  style={{cursor: 'pointer'}}>Add Product</h5>
//                     <h5 style={{cursor: 'pointer'}}>Edit Product</h5>
//                 </Col>

//     <Col className="col-md-9 mt-5">
//         <div className = "admin">
//         <h4>Add Product</h4>       
//     <form onSubmit={handleSubmit(onSubmit)}>
   
//       <input name="name" placeholder= "ProductName" ref={register} />
//       <br></br>
//       <br></br>
//       <input name="price" placeholder= "ProductPrice" ref={register} />
//       <br></br>
//       <br></br>
//       <input name="picture" type = "file" onChange={handleImageUpload}    />
//       <br></br>
//       <input type="submit" />
//     </form>
//         </div>
    
//         </Col>
//     </Row>
// </Container>

            
     
//         </div>
    );
};

export default AddFood;
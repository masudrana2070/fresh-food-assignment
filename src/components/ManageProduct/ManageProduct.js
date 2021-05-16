import { faPlus, faTasks, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageProduct = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:5055/foods")
        .then(res=>res.json())
        .then(data=> setFoods(data))
        .catch(err=>console.log(err))
    }, [])

    // const handleDelete = (_id) =>{
    //     axios.delete(`http://localhost:5055/delete/${_id}`)
    //     .then(res=>{
    //         console.log(res);
    //         console.log(res.data)
    //     })
    // }
    const deleteProduct = (_id) => {
        fetch(`http://localhost:5055/delete/${_id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => console.log("delete", data))
            .catch((err) => console.log(err));
    };
    return (
        <div>
            <div className="sidebar">
                <Link to="/addFood">
                    <FontAwesomeIcon icon={faPlus} /> Add Product
                </Link>
                <Link to="/manageProduct">
                    <FontAwesomeIcon icon={faTasks} /> Manage Product
                </Link>
            </div>

        <div className="content">
        <Container style={{ marginTop: "60px" }}>
        <h3 className="text-center">Manage Product</h3>
            <Table className="text-center" striped bordered hover>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       foods.map(pd=> <tr>
                        <td>{pd.name}</td>
                        <td>{pd.price} Taka</td>
                        <td><button onClick={()=>deleteProduct(pd._id)} className="btn btn-danger"><FontAwesomeIcon icon={faTrash} /></button> </td>
                    </tr>)
                   }
                    
                </tbody>
            </Table>
            </Container>
        </div>
        </div>
    );
};

export default ManageProduct;
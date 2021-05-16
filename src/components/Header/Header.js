import React, { useContext } from 'react';
// import { Container } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'

const Header = () => {

    const [signInUser, setSignInUser]   =  useContext(UserContext);
    const history = useHistory();
    const login = () =>{
        history.push('/login');
    }

    return (

        <div>

        <nav className='navbar navbar-expand-lg navbar-light bg-success fw-bold'>
                <div className='container'>
                    <Link to='/' className='navbar-brand fs-3 text-uppercase'>Food Shop</Link>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav ml-auto mb-2 mb-lg-0'>
                            <li className='nav-item px-3'>
                                <Link to='/home' className='nav-link active'>Home</Link>
                            </li>
                            <li className='nav-item px-3'>
                                <Link to='/orders' className='nav-link active'>Orders</Link>
                            </li>
                            <li className='nav-item px-3 '>
                                <Link to='/admin' className='nav-link active'>Admin</Link>
                            </li>                    
                        {
                            (signInUser?.email) ? 
                            <li className="nav-item px-3">
                            <p className='nav-link active text-center mt-2'>
                            {signInUser.displayName}
                            </p> 
                            </li> : ''
                        }
                        {
                             (signInUser?.email)? <button style={{height: '45px'}} onClick={()=>setSignInUser({})} className="btn btn-danger nav-link active text-white mt-2">LOGOUT</button> : <button style = {{height: '40px'}} onClick={login} className="btn btn-primary nav-link active text-white mt-2">LOGIN</button>
                        }

                        </ul>

                    </div>
                </div>
            </nav>


        </div>




        // <div class="header">
        //     <Container>
        //         <nav class="navbar navbar-expand-lg bg-secondary ">
        //             <div class="container-fluid">
        //                 <p class= "shop-header">Food Shop</p>
        //                 <div class="collapse navbar-collapse" id="navbarSupportedContent">
        //                     <ul class="navbar-nav  ml-auto ">
        //                         <li class="nav-item p_right">
        //                             <Link to="/home">Home</Link>
        //                         </li>
        //                         <li class="nav-item p_right">
        //                             <Link to="/orders">Orders</Link>
        //                         </li>
        //                         <li class="nav-item p_right">
        //                             <Link to="/admin">Admin</Link>
        //                         </li>
        //                         <li class="nav-item p_right">
        //                             <Link to="/login">Login</Link>
        //                         </li>

        //                     </ul>

        //                 </div>
        //             </div>
        //         </nav>
        //     </Container>

        // </div>
    );
};

export default Header;
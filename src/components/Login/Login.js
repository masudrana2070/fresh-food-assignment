import React from 'react';
import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
import { useContext } from 'react';
// import { useState } from 'react';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


const Login = () => {

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    // const [user, setUser] = useState({});

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  
    const [signInUser, setSignInUser] = useContext(UserContext);

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
  // const {displayName,email} = result.user;
    var user = result.user;
   setSignInUser(user);
   history.replace(from);
   
  }).catch((error) => {
    
    
    var errorMessage = error.message;
    var email = error.email;
    console.log(errorMessage, email);
    
   
  });
    }
    return (
        <div className= "login">
        <button className= "btn btn-primary rounded fw-bold" onClick = {handleGoogleSignIn}> <FontAwesomeIcon icon = {faGoogle}></FontAwesomeIcon> Google Sign In</button>
        </div>
    );
};

export default Login;
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import AddFood from './components/AddFood/AddFood';
import Login from './components/Login/Login';
import NoMatch from './components/NoMatch/NoMatch';
import Checkout from './components/Checkout/Checkout';
import { useState } from 'react';
import { createContext } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Orders from './components/Orders/Orders';
import Admin from './components/Admin/Admin';
import ManageProduct from './components/ManageProduct/ManageProduct';

export const UserContext = createContext();
function App() {
  const [signInUser, setSignInUser] = useState({})
  return (
    <UserContext.Provider value = {[signInUser,setSignInUser]}>
     <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/addFood">
            <AddFood />
          </PrivateRoute>
          <PrivateRoute path="/manageProduct">
            <ManageProduct />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
            <Route path="/orders/:_id">
            <Orders></Orders>
          </Route>
          <PrivateRoute path="/checkout/:_id">
            <Checkout/>
          </PrivateRoute>
          <PrivateRoute path="/orders">
          <Orders />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path= "*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>

     

  );
}

export default App;

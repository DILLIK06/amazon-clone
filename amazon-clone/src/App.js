import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Checkout from './checkout/Checkout';
import Home from './home/Home';
import Login from './login/Login';
import Payment from './payment/Payment';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    // Will only run onve when the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({ type: 'SET_USER', user: authUser })
      } else {
        // The user is logged out
        dispatch({ type: 'SET_USER', user: null })
      }
    })
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
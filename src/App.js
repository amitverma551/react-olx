import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/Home';
import ProductDetail from './components/products/ProductDetail';
import Header from './components/Header';
import Notfound from './components/NotFound';



function App() {
  return (
    <div>
      <Header />
      <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/item/:id" component={ProductDetail}></Route>
        <Route component={Notfound} />
      </Switch>
      </Router> 
    </div>
  );
}

export default App;

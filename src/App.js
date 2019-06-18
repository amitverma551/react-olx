import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/Home';
import ProductDetail from './components/products/ProductDetail';
import ProductListing from './components/products/ProductListing';
import Header from './components/Header';
import Notfound from './components/NotFound';


function App() {
  return (
    <div>
      <Header r={Router} l={Link} />
      <Router>
      <Link to="/">Home</Link>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/item/:id" component={ProductDetail}></Route>
          <Route exact path="/items/" component={ProductListing}></Route>
          <Route exact component={Notfound} />
        </Switch>
      </Router> 
    </div>
  );
}

export default App;

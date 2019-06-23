import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/Home';
import ProductDetail from './components/products/ProductDetail';
import ProductListing from './components/products/ProductListing';
import EditProduct from './components/products/EditProduct';
import Header from './components/Header';
import Notfound from './components/NotFound';


function App() {
  return (
    <div>
      <Router>
      <Header />
      <Link to="/">Home</Link>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/item/:id" component={ProductDetail}></Route>
          <Route exact path="/items/" component={ProductListing}></Route>
          <Route exact path="/item/edit/:id" component={EditProduct}></Route>
          <Route exact component={Notfound} />
        </Switch>
      </Router> 
    </div>
  );
}

export default App;

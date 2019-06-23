import React, { Component } from 'react';
import Categories from './Categories';
import { conditionalExpression } from '@babel/types';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import ProductListing from './products/ProductListing';
import { ReactSearchKit, SearchBar, ResultsList } from "react-searchkit";

class Header extends Component {
    render() {
        return (
            <div>
                <ProductListing />
                    <h1><Link to="/">hello world</Link></h1>
                <Categories />
            </div>
        )
    }
}

export default Header;
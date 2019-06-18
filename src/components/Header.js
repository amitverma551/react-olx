import React, {Component} from 'react';
import Categories from './Categories';
import { conditionalExpression } from '@babel/types';
import { Link, BrowserRouter as Router } from 'react-router-dom';

class Header extends Component{
    render(){
        return (
           <div>
               <Router>
                  <h1><Link to="/">hello world</Link></h1>
               </Router>
               <Categories />
           </div>
        )
    }
}

export default Header;
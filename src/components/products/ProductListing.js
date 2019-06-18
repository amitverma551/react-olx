import React, {Component} from 'react';
import Api from "../../auth";
import { ReactSearchKit } from "react-searchkit";
import { Link, BrowserRouter as Router } from 'react-router-dom';

class ProductListing extends Component{

    constructor(props){
        super(props)
        this.state = {
           searchInput : ''
        }
    }


    searchProduct = (e) => {
        this.setState({
            searchInput : e.target.value 
        })
        
        Api.get('products/?search=' + this.state.searchInput, (error, data, response) => {
            this.setState({
                pd: JSON.parse(response)
            })
        });
    }

    render(){
        const SITEURL = window.location.origin;
        return (
            <div className="container">
                <input type="text" onChange={this.searchProduct}/>
                <Router>
                {
                   this.state.pd && this.state.pd.map(x => <Link key={x.id} to={'/item/' + x.slug + '-iid-' + x.id}>{x.name}</Link>)
                }
                </Router>
            </div>
        )
    }
}

export default ProductListing;
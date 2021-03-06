import React, { Component } from 'react';
import Api from "../../auth";
import ProductSlider from './ProductSlider';
import ProductPrice from './ProductPrice';
import SellerDescription from './SellerDescription';
import ProductDescription from './ProductDescription';
import {Link} from 'react-router-dom';

class ProductDetail extends Component {
    constructor() {
        super()
        this.state = {
            pd: [],
            value: false
        }
    }

    componentDidMount() {
        const { params } = this.props.match;
        const param_id = params.id.split('-iid-')[1];
        Api.get('products/' + param_id, (error, data, response) => {
            this.setState({
                pd: JSON.parse(response)
            })
        });
    }

    render() {
        const { pd } = this.state;
        if (pd === undefined) {
            console.log("Loading...")
        }
        console.log(this.state.pd)
        return (
            <div className="container">
                <div className="main">
                    <div className="left_col">
                        <ProductSlider imgSrc={pd.images} />
                        <ProductDescription des={pd.description} />
                    </div>
                    <div className="rigth_col">
                        <Link to={`edit/${this.props.match.params.id.split('-iid-')[1]}`}>Edit this Product</Link>
                        <ProductPrice price={pd.price} name={pd.name} date={pd.date_created} loc={pd.categories} />
                        <SellerDescription adId={this.props.match.params.id} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductDetail;
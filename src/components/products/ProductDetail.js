import React, {Component} from 'react';
import Api from "../../auth";
import ProductSlider from './ProductSlider';
import ProductPrice from './ProductPrice';
import SellerDescription from './SellerDescription';
import ProductDescription from './ProductDescription';

class ProductDetail extends Component{
    constructor(){
        super()
        this.state = {
            pd : []
        }
    }

componentDidMount(){
    const {params} = this.props.match;
    const param_id = params.id.split('-iid-')[1];
    Api.get('products/'+ param_id, (error, data, response) => {
        this.setState({
            pd: JSON.parse(response)
        })
    });
}

    render(){
        const {pd} = this.state;
        if(pd === undefined) {
            console.log("Loading...")   
        }
        return(
            <div className="container">
               <div className="main">
                <div className="left_col">
                    {
                        pd.images && <ProductSlider imgSrc={pd.images} />
                    }  
                    {
                        pd.description && <ProductDescription des={pd.description} />
                    }
                </div>
                <div className="rigth_col">
                    <ProductPrice price={pd.price} name={pd.name} date={pd.date_created} loc={pd.categories} />
                    <SellerDescription adId={this.props.match.params.id} />
                </div>
                </div>
            </div>
        )
    }
}

export default ProductDetail;
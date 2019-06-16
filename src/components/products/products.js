import React, {Component} from 'react';
import Api from "../../auth";
import SingleProduct from './singleProduct'

class Products extends Component{
    constructor(){
        super()
        this.state = {
            products : []
        }
    }

componentDidMount(){
    Api.get('products', (error, data, response) => {
        this.setState({
            products: JSON.parse(response)
        })
    });
}

    render(){
        const {products} = this.state;
        if(products === undefined) {
            console.log("Loading...")   
        }
        return(
            <div className="container">
                <div className="_3OKe_"><div className="_3wDI-"><span>Fresh recommendations</span></div>
                 <ul className="rl3f9 AueO0" data-aut-id="itemsList">
                     {
                         products.length ?
                         products.map( product => <SingleProduct key={product.id} slug={'item/' + product.id} title={product.name} image={product.images[0].src} price={product.price} date={product.date_created} location={product.categories} featured={product.featured} />
                         ) :
                         null
                     }
                     </ul>
            </div>
            </div>
        )
    }
}

export default Products;
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class SingleProduct extends Component{
    constructor(props){
        super(props)
        this.setState ={
        }
    }
    
    render(){
        const [...loc] = this.props.location
        return(
            <li data-aut-id="itemBox" className="EIR5N">
             <Link to={this.props.slug} className="fhlkh">
                <figure className="_2grx4" data-aut-id="itemImage">
                <img src={this.props.image} className="_3Kg_w" /> 
                </figure>
                <div className="IKo3_">
                    {
                     this.props.featured == true ?
                     <div className="_2Vp0i"><label><span>Featured</span></label></div>:
                     null
                    }
                    <span className="_89yzn" data-aut-id="itemPrice">₹ {this.props.price}</span><span className="_2tW1I" data-aut-id="itemTitle">{this.props.title}</span>
                    <div className="_1KOFM">
                        {
                            loc.length ?
                            loc.reverse().map( l => <span key={l.id} className="tjgMj" data-aut-id="item-location">{l.name}</span>):
                            null
                        }
                        <span className="zLvFQ"><span>{this.props.date}</span></span></div>
                </div>
                </Link>
            <span className="rui-3pJ6W _2LYp_" data-aut-id=""><i className="rui-1XUas rui-NHuvU" title="Favourite"></i></span>
            </li>
        )
    }
}

export default SingleProduct;
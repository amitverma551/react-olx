import React, { Component, lazy, Suspense } from 'react';
import Api from "../../auth";
import { Link, Redirect } from 'react-router-dom';

class ProductDetail extends Component {
    constructor() {
        super()
        this.state = {
            pd: [],
            pname: '',
            rprice: '',
            des : '',
            redirectToReferrer: false
        }
    }

    componentDidMount() {
        const { params } = this.props.match;
        Api.get('products/' + params.id, (error, data, response) => {
            this.setState({
                pd: JSON.parse(response)
            })
        });
    }

    handleChange = (e) => {
        this.setState({
            pname: e.target.value
        })
    }
    handlePriceChange = (e) =>{
        this.setState({
            rprice : e.target.value
        })
    }

    handleDescriptionChange = (e) =>{
        this.setState({
            des : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { params } = this.props.match;
        const {pname, rprice, des, pd} = this.state;
        var data = {
            name: pname ? pname : pd.name,
            regular_price : rprice ? rprice : pd.regular_price,
            description : des ? des : pd.description
        }
        Api.put('products/' + params.id, data, (error, data, response) => {
            console.log(response)
        });

        this.setState({
            redirectToReferrer: true
        })
    }

    render() {
        const { pd } = this.state;
        if (pd === undefined) {
            console.log("Loading...")
        }
        console.log(this.props.match.params.id);
        if (this.state.redirectToReferrer === true) {
            return <Redirect to={`/item/${pd.slug}-iid-${this.props.match.params.id}`} />
        }
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label for="p_name">Product Name</label>
                        <input id="p_name" onChange={this.handleChange} name="p_name" type="text" defaultValue={pd.name} />
                    </div>
                    <div><label for="regular_price">Price</label>
                        <input id="regular_price" onChange={this.handlePriceChange} name="regular_price" type="text" defaultValue={pd.regular_price} />
                        </div>
                        <div><label for="description">Description</label>
                        {/* <Suspense fallback={<div>Loading....</div>}>
                            <TextEditor desc={pd.description} />
                        </Suspense> */}
                        <textarea id="description" rows="15" cols="100" onChange={this.handleDescriptionChange} name="description" placeholder={pd.description}></textarea>
                        </div>
                    <div className="btn-submit">
                        <button>Update</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default ProductDetail;
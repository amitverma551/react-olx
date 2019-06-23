import React, { Component } from 'react';
import Api from "../../auth";
import { Row, Col, Icon } from 'antd';
import { Link} from 'react-router-dom';

class ProductListing extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchInput: ''
        }
    }


    searchHandle = (e) => {
        this.setState({
            searchInput: e.target.value
        })
        Api.get('products/?search=' + this.state.searchInput, (error, data, response) => {
            this.setState({
                pd: JSON.parse(response)
            })
        });
    }

    render() {
        const stylebox = {
            'border': '1px solid red',
            'height': '40px',
            'width': '100%'
        }
        const SITEURL = window.location.origin;
        return (
            <div className="container">
                <Row>
                    <Col md={6}>
                        <input type="text" style={stylebox} onChange={this.searchHandle} />
                    </Col>
                </Row>
                    <ul>
                        {
                            this.state.pd && this.state.pd.map(x => <li><Link key={x.id} to={'/item/' + x.slug + '-iid-' + x.id}>{x.name}</Link></li>)
                        }
                    </ul>
            </div>
        )
    }
}

export default ProductListing;
import React, {Component} from 'react';
import Api from "../../auth";

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
                <ul>
                    {
                        pd.images && pd.images.map( x => {
                        return <li key={x.id}><img src={x.src} /></li>
                        })
                    }
                </ul>
                {
                pd.description ? 
                <div dangerouslySetInnerHTML={{__html: pd.description}}></div>:
                null
                }
            </div>
        )
    }
}

export default ProductDetail;
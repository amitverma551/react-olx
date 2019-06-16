import React, {Component} from 'react';
import HomeBanner from './HomeBanner';
import Products from './products/products';

class Home extends Component {
    render(){
        return(
            <div>
                <HomeBanner />
                <Products />
            </div>
        )
    }
}

export default Home;
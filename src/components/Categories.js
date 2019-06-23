import React, { Component } from 'react';
import Api from "../auth";
import { Link } from 'react-router-dom';

class Categories extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cat: []
        }
    }

    componentDidMount() {
        Api.get('products/categories', (error, data, response) => {
            this.setState({
                cat: JSON.parse(response)
            })
        });
    }

    render() {
        const category = this.state.cat;
        const parentCat = category.filter(x => x.parent == 0);
        const ChildCat = category.filter(x => x.parent != 0);
        var arr = [];

        for(let i = 0; i < parentCat.length; i++){
            for(let j = 0; j < ChildCat.length; j++){
                if(parentCat[i].id == ChildCat[j].parent){
                    // console.log(ChildCat[j])
                }
            }
        }


        return (
            <div>

                    <ul>
                        <li>
                            {

                            }
                        </li>
                    </ul>

                    <ul className="mainCat">
                        {parentCat.length ?
                            parentCat.map(x => <li key={x.id}><Link exact to={`${x.slug}-iid-${x.id}`}>{x.name}</Link></li>) :
                            null
                        }
                    </ul>
            </div>
        )
    }
}

export default Categories;
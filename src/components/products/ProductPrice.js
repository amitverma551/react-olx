import React, { Component } from 'react';

class ProductPrice extends Component {
    render() {

        const pp = this.props;
        console.log(pp)
        return (
            <div className="rui-2ns2W _2r-Wm">
                <div className="rui-2vHTl">
                    <section className="_2wMiF">
                        <span data-aut-id="itemPrice" className="_2xKfz">₹ {pp.price}</span><span className="_18gRm">2017 - 8,915 km</span>
                        <h1 data-aut-id="itemTitle" className="_3rJ6e">{pp.name}</h1>
                        <div className="_2kqti">
                            <div data-aut-id="itemLocation" className="_1uzVV">
                                <div className="_2A3Wa">
                                    {
                                        pp.loc && pp.loc.reverse().map(x => <span key={x.id} className="_2FRXm">{x.name + ' '}</span>)
                                    }
                                </div>
                            </div>
                            <div data-aut-id="itemCreationDate" className="_2DGqt"><span>{pp.date}</span></div>
                        </div>
                    </section>
                    <div className="_3Y_Le"><span className="rui-3pJ6W" data-aut-id="btnShare"><i className="rui-1XUas rui-3sJHK" title="Share"></i></span><span className="rui-3pJ6W" data-aut-id=""><i className="rui-1XUas rui-NHuvU" title="Favorite"></i></span></div>
                </div>
            </div>
        )
    }
}

export default ProductPrice;
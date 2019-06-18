import React, {Component} from 'react';

class ProductDescription extends Component{
    render(){
       return(
        <section className="CBG3S">
        <div className="rui-2ns2W">
           <div className="rui-2vHTl _31p_I">
              <h3 data-aut-id="itemDescriptonTitle"><span>Details</span></h3>
              <div data-aut-id="itemParams" className="cb14b">
                 <div className="_3JPEe">
                    <div className="_1qnLG">
                       <div className="_36TXl"><span className="_3B2o4" data-aut-id="key_make">Brand</span><span className="_2G3F0" data-aut-id="value_make">Maruti Suzuki</span></div>
                    </div>
                    <div className="_1qnLG">
                       <div className="_36TXl"><span className="_3B2o4" data-aut-id="key_model">Model</span><span className="_2G3F0" data-aut-id="value_model">Baleno</span></div>
                    </div>
                    <div className="_1qnLG">
                       <div className="_36TXl"><span className="_3B2o4" data-aut-id="key_year">Year</span><span className="_2G3F0" data-aut-id="value_year">2017</span></div>
                    </div>
                    <div className="_1qnLG">
                       <div className="_36TXl"><span className="_3B2o4" data-aut-id="key_petrol">Fuel</span><span className="_2G3F0" data-aut-id="value_petrol">Petrol</span></div>
                    </div>
                    <div className="_1qnLG">
                       <div className="_36TXl"><span className="_3B2o4" data-aut-id="key_mileage">KM driven</span><span className="_2G3F0" data-aut-id="value_mileage">8,915 km</span></div>
                    </div>
                 </div>
              </div>
              <h3 data-aut-id="itemDescriptonTitle" className="_3NDAz"><span>Description</span></h3>
              <div data-aut-id="itemDescriptionContent">
                  {this.props.des}
              </div>
           </div>
        </div>
     </section>
       )
    }
}

export default ProductDescription;
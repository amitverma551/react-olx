import React, {Component} from 'react';

class SellerDescription extends Component{
   render(){
       return(
           <div>
        <div className="rui-2ns2W YpyR-">
        <div className="rui-2vHTl">
           <div className="SThIS">
              <div data-aut-id="profileTitle" className="_3ir-l">Seller description</div>
              <div className="_1oSdP" data-aut-id="profileCard">
                 <a rel="nofollow" href="/nf/user/408269462">
                    <figure className="rui-D_EoZ _186ru"></figure>
                 </a>
                 <div className="_224W6">
                    <a rel="nofollow" href="/nf/user/408269462">
                       <div className="_3oOe9">Spinny Gurgaon Grand Mall Hub</div>
                       <span className="_3QXmp">
                          <svg width="18px" height="18px" viewBox="0 0 1024 1024" data-aut-id="icon">
                             <path className="rui-77aaa" d="M456.533 170.667h-76.8v72.533l268.8 268.8-268.8 268.8v72.533h76.8l341.333-341.333-341.333-341.333z"></path>
                          </svg>
                       </span>
                    </a>
                 </div>
              </div>
              <button type="button" data-aut-id="btnChat" className="rui-3sH3b rui-1KW_n rui-1BozO">Chat with seller</button>
           </div>
           <section className="_1p1Lq" data-aut-id="callToActionCard"></section>
        </div>
        </div>
        <div className="fr4Cy"><strong>AD ID {this.props.adId.split('-iid-')[1]}</strong><p className="_2yP1W">Report this ad</p></div>
     </div> 
       )
   }
}

export default SellerDescription;
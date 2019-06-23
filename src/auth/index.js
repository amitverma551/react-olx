import WooCommerceAPI from 'woocommerce-api';
import Constants from "./config";
    
const Api = new WooCommerceAPI({
    url: Constants.endpoint,
    consumerKey: Constants.consumerKey,
    consumerSecret: Constants.consumerSecret,
    wpAPI: true,
    version: 'wc/v3'
});

export default Api;
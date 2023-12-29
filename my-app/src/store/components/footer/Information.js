import { Link } from "react-router-dom";
import ListItem from "../common/ListItem";
const informationData = ['Track your order','Locate Store',
                         'Online Support' ,'Terms & Conditions',
                         'Payment','Shipping & Returns','Gift coupon',
                          'Special coupon' ];
    
function Information() {
    return(
        <div className="main-footer_widget">
            <h4 className="main-footer_widget-title">INFORMATION</h4>
            <ul>
                {
                    informationData.map(item => 
                        <ListItem className="main-footer_widget-list-item"
                            role="button"
                            tabindex="0">
                            <Link to="#" className="main-footer_widget-list-link">{item}</Link>  
                        </ListItem>
                    )
                }
                
                
            </ul>
        </div>
    );
}

export default Information
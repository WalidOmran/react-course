import { Link } from "react-router-dom";
import ListItem from "../common/ListItem";
const customerData =
 [
    {
        title: 'About Us',
        link: '/about-us'
    },
    {
        title: 'Features',
        link: '/features'
    },
    {
        title: 'My Account',
        link: '/my-account'
    },
    {
        title: 'Cart',
        link: '/cart'
    },
    {
        title: 'Checkout',
        link: '/checkout'
    },
    {
        title: 'Wishlist',
        link: '/wishlist'
    },
    {
        title: 'blog',
        link: '/blog'
    },
    {
        title: 'Contact',
        link: '/contact'
    } 
];
function CustomerCare() {
    return(
        <div className="main-footer_widget">
            <h4 className="main-footer_widget-title">CUSTOMER CARE</h4>
            <ul>
                {
                    customerData.map(item => 
                        <ListItem className="main-footer_widget-list-item"
                            role="button"
                            tabindex="0">
                            <Link to={item.link} className="main-footer_widget-list-link">{item.title}</Link>  
                        </ListItem>
                    )
                }
                
                
            </ul>
        </div>
    );
}
export default CustomerCare
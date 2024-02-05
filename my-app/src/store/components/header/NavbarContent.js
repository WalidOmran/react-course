import { Link } from 'react-router-dom';
import ListItem from "../common/ListItem";
import OptionList from "./OptionList";
import userIcon from "../../image/icons/user.png";
import cartIcon from "../../image/icons/shopping-cart-add.png";
function NavbarContent() {
    const langList = ['Bangla', 'Arabic','Urdu'];
    const locationList = ['Dhaka', 'USA','India'];
    return(
        <ul className="main-header_navbar-content  ">
            <ListItem className="main-header_item main-header_lang">
                <div className="main-header_lang-btn" role="button" tabindex="0" onClick={()=>{console.log('main-header_lang-btn')}}>
                    <span>Eng</span>
                    <span><i className="fa-solid fa-chevron-down"></i></span>
                </div>
                <OptionList optionList={langList} />
            </ListItem>
            <ListItem className="main-header_item main-header_location">
                <div className="main-header_location-btn" role="button" tabindex="0" onClick={()=>{console.log('main-header_location-btn')}}>
                    <span>Location</span>
                    <span><i className="fa-solid fa-chevron-down"></i></span>
                </div>
                <OptionList optionList={locationList} />
            </ListItem>
            <ListItem className="main-header_item">
                <Link to="/store/user" className="main-header_link">
                    <figure className="main-header_navbar-icon">
                        <img src={userIcon} loading="lazy" alt="user"/>
                    </figure>
                </Link>
            </ListItem>
            <ListItem className="main-header_item">
                <Link to="/store/cart" className="main-header_link">
                    <figure className="main-header_navbar-icon">
                        <img src={cartIcon} loading="lazy" alt="cart" />
                    </figure>
                </Link>
            </ListItem>
        </ul>
    );
}
export default NavbarContent
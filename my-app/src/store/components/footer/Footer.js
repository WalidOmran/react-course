import { Link } from "react-router-dom";
import ListItem from "../common/ListItem";
import ContactInfo from "./ContactInfo";
import CustomerCare from "./CustomerCare";
import Information from "./Information";
import Copyright from "./Copyright";
import './Footer.css';

function Footer(){
    return(
        <footer className="main-footer">
            <div className="container">
                <div className="main-footer_content">
                    
                    <ContactInfo/>
                    <CustomerCare/>
                    <Information/>
                    <div className="main-footer_widget">
                        <h4 className="main-footer_widget-title">LATEST TWEET</h4>
                        <p>Loading...</p>
                    </div>
                </div>
            </div>
            <Copyright/>
        </footer>
    )
}
export default Footer
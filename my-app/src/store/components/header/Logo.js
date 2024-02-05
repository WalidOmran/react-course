import { Link } from 'react-router-dom';
import logoImage from  "../../image/Logo.svg";
function Logo(){
    return(
        <div className="main-header_logo wo_flex">
            <Link to="/store" className="main-header_logo-link">
                <img className="main-header_logo-img" src={logoImage} alt="logo"/>
            </Link>
        </div>
    );
}

export default Logo
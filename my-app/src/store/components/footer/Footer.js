import ListItem from "../common/ListItem";
import './Footer.css';

function Footer(){
    return(
        <footer className="main-footer">
            <div>
                <ul>
                    <ListItem className="main-header_top-nav-option-item"
                                role="button"
                                tabindex="0">
                                  item 1  
                    </ListItem>
                    <ListItem className="main-header_top-nav-option-item"
                                role="button"
                                tabindex="0">
                                  item 2  
                    </ListItem>
                    <ListItem className="main-header_top-nav-option-item"
                                role="button"
                                tabindex="0">
                                  item 3  
                    </ListItem>
                </ul>
            </div>
        </footer>
    )
}
export default Footer
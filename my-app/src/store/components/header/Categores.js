// import getCategores from './getCategores';
import { Link } from 'react-router-dom';
import categoresData from '../Api/getCategores';
function Categores(){
    return(
        <section className="main-header_categores">
          <div className="large-container">
            <ul className="main-header_categores-list">
              {
                categoresData.map(
                      (item,index) => 
                      <li className="main-header_item">
                          <Link to='/category' className="main-header_link" key={index}>{item}</Link>
                      </li>
                  )
              }
              
              
            </ul>
          </div>
      </section>
    );
}
export default Categores
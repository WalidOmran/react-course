// import productsData from "../Api/Products";
import productsData from "../Api/apiProducts";
import ProductRating from "./ProductRating";
import { Link } from "react-router-dom"; 
import './Product.css';

function Product() {
    return(
       
        <div id="productAria"  className="product_aria wo_row">
            {
                    productsData.map(
                        (item) => 
                        
                        <section key={item.id}  className="product_item">
                            <Link to={`/products/${item.id}`}  className="product_item-link">
                                <div  className="product_top">
                                    <img  className="product_img" src={item.image} alt="homepad"/>
                                    <span  className=" product_offer">24%</span>
                                    <span  className="product_icon">
                                        <i  className="fa-regular fa-heart fa-lg"></i>
                                    </span>
                                </div>
                                <div  className="product_bottom">
                                    <div  className="product_content">
                                        <h3  className="product_title wo_flex wo_items-center wo_content-space-between">
                                            <span>{item.title}</span>
                                            <span  className="product_price">
                                            <sup>$</sup>
                                            {item.price}
                                            <sup>.00</sup>
                                            </span>
                                        </h3>
                                        <p  className="product_category">{item.category}</p>
                                        </div>
                                        <ProductRating rate={item.rating.rate} count={item.rating.count}/>
                                    </div>
                            </Link>
                        </section>
                            
                    )
            }
        </div>
           
        
    );
}
export default Product
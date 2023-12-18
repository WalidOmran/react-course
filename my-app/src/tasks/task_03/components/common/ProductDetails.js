import Input from "./Input";
import Button from "./Button";
import cart from '../../image/icons/shopping-cart-add.png';
function ProductDetails({product}) {
    return(
        <div className="product-details wo_row">
            <figure className="wo_50">
                <img src={product.image} alt={product.title} className="single-product_img" />
            </figure>
            <section className="single-product_info wo_50">
                <div className="wo_flex wo_nowrap wo_content-space-between wo_100">
                    <div>
                        <p className="single-product_category">{product.category}</p>
                        <h3 className="single-product_title">{product.title}</h3>
                        {/* <ProductRating rate={product.rating.rate} count={product.rating.count}/> */}
                    </div>
                    <p className="single-product_price">{product.price}$</p>
                </div>
                <div className="single-product_desc">
                    <p>{product.description}</p>
                </div>
                <div className="single-product_option ">
                
                    <div className="single-product_quantity wo_flex wo_items-center">
                        <p className="single-product_quantity-text">Quantity</p>
                        <div className="pro-qty">
                            {/* <span className="dec qtybtn">-</span> */}
                            <Input className="main-input" type="number" value={1}/>
                            {/* <span className="inc qtybtn">+</span> */}
                        </div>
                    </div>                            
                    
                    <div className="single-product_colors">
                        <h5>Color</h5>
                        {/* <select className="nice-select main-input" >
                            <option>red</option>
                            <option>black</option>
                            <option>yellow</option>
                            <option>grey</option>
                        </select> */}
                        {/* <div className="nice-select" tabindex="0">
                            <span className="current">red</span>
                            <ul className="list">
                                <li data-value="red" className="option selected">red</li>
                                <li data-value="black" className="option">black</li>
                                <li data-value="yellow" className="option">yellow</li>
                                <li data-value="grey" className="option">grey</li>
                            </ul>
                        </div> */}
                    </div>                            
                    
                </div>
                <div className="single-product_availability">
                    <p>Availability: In Stock</p>
                </div>
                <div className="single-product_action">
                    <Button className="btn single-product_btn-cart add-to-cart" >
                        <span className="add-to-cart_icon">
                            <img src={cart} alt={cart} />
                        </span>
                        <span className="add-to-cart_text">Add To Cart</span>
                    </Button>
                    <Button className="single-product_btn-heart">
                        <span>
                            <i  className="fa-regular fa-heart fa-lg"></i>
                        </span>
                    </Button>
                    
                </div>
            </section>
        </div>
    );
}
export default ProductDetails
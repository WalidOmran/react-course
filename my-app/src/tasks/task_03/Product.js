import productsData from "./Api/Products";       
function Product() {
    return(
       
        <div id="productAria"  className="product_aria wo_row">
            {
                    productsData.map(
                    (item) => 
                    
                    <section  className="product_item">
                        <a href="#"  className="product_item-link">
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
                                <div  className="product_rating wo_row wo_items-center wo_content-space-between">
                                
                                <div  className="product_stars">
                                    <span  className="product_star">
                                    <i  className="fa-solid fa-star"></i>
                                    </span>
                                    <span  className="product_star">
                                    <i  className="fa-solid fa-star"></i>
                                    </span>
                                    <span  className="product_star">
                                    <i  className="fa-solid fa-star"></i>
                                    </span>
                                    <span  className="product_star">
                                    <i  className="fa-solid fa-star"></i>
                                    </span>
                                    <span  className="product_star">
                                    <i  className="fa-regular fa-star"></i>
                                    </span>
                                    <span>
                                        ({item.rating.count})
                                    </span>
                                </div>  
                                </div>
                            </div>
                        </a>
                    </section>
                        
                )
            }
        </div>
           
        
    );
}
export default Product
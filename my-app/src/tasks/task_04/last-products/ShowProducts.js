import productsData from "./ApiProducts";
function ShowProducts({count}){
        
    const filterData = productsData.filter((item) => 
            item.id < count
            );
    return(
        filterData.map(
            (item) => 
            <section  className="product_item last-products--item" key={item.id}>
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
    );
}
export default ShowProducts
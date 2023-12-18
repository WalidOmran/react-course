function ProductRating({rate,count}){
    function chickRate(index){
             if(rate > index ){
              return  "fa-solid fa-star"
             }else if(rate > (index+0.5)){
                return "fa-solid fa-star-half-stroke"
             }else if(rate < (index+1)){
                return "fa-solid fa-star-half-stroke"
             }else {
                return "fa-regular fa-star"
             }
        
    };
    function ProductStar({star}){;
        return(
            <span  className="product_star">
                <i  className={star}></i>
                {/* "fa-solid fa-star" */}
                {/* {<i class="fa-solid fa-star-half-stroke"></i>} */}
            </span>
        );
    }
    return(
        <div  className="product_rating wo_row wo_items-center wo_content-space-between">                    
            <div  className="product_stars">
                
                <ProductStar star={ chickRate(1)} />
                <ProductStar star={ chickRate(2)} />
                <ProductStar star={ chickRate(3)} />
                <ProductStar star={ chickRate(4)} />
                <ProductStar star={ chickRate(5)} />
                {/* <ProductStar star={(rate > 2)? "fa-solid fa-star" :"fa-regular fa-star" } />
                <ProductStar star={(rate > 3)? "fa-solid fa-star" :"fa-regular fa-star" } />
                <ProductStar star={(rate > 4)? "fa-solid fa-star" :"fa-regular fa-star" } />
                <ProductStar star={(rate > 5)? "fa-solid fa-star" :"fa-regular fa-star" } />
                */}<span>
                {rate}
                </span>
                <span>
                    ({count})
                </span>
                
            </div>  
        </div>
    );
}
export default ProductRating
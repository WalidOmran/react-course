import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import SingleProductBanners from "../components/common/SingleProductBanners";
import ProductDetails from "../components/common/ProductDetails";
// import ProductRating from "../components/today-offers/ProductRating"; 
import './single-product.css';
import GetData from './GetData';
function SingleProduct(){

    const params= useParams();
    // console.log(params);
    // const [product,setProduct] = useState({});
    // useEffect(()=>{
    //     fetch(`https://fakestoreapi.com/products/${params.productId}`)
    //         .then(res => res.json())
    //         .then(data => setProduct(data));
    // },[]);
   const product = GetData(params.productId)
console.log('test : '+product.title);
   
    return(
        <>
           <Header />
           <section className="single-product">
                <SingleProductBanners />
                <div className="container">
                    <ProductDetails product={product}/>
                </div>
                {/* {product.rating.rate } */}
                {/* {product.rating.count} */}
                
           </section>
        </>
        
    );
}

export default SingleProduct
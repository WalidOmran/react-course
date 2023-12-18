import { useEffect, useState } from "react";

function GetData(productId){
    
    const [product,setProduct] = useState({});
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    },[]);
    return product
}
export default GetData
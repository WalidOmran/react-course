// import { useEffect,useState } from "react";
const localCategoresData = [
            "electronics",
            "jewelery",
            "men's clothing",
            "women's clothing"
            
        ];

     
const test = ()=>{
    // const [index,setIndex] = useState(0);
   }
// const [apiCategores,setApiCategores] = useState(0); 
const apiCategoresData = await fetch('https://fakestoreapi.com/products/categories')
                    .then(res => res.json())
                    .then(completData => completData)
                    .catch(error => console.log(error));

const categoresData = apiCategoresData? apiCategoresData : localCategoresData;
export default categoresData
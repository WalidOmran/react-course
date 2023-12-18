import { useParams } from "react-router-dom";
import Header from "../components/header/Header";
import { useEffect, useState } from "react";
function Category(){
    const params = useParams();
    // console.log(params.categoryName);
    // const url = 'https://fakestoreapi.com/products/category/'+params.categoryName;
      // const getCategores = () =>{
    //     fetch(`https://fakestoreapi.com/products/category/${params.categoryName}`)
    //     .then(res => res.json())
    //     .then(data => setCategores(data));
    // } 
    const [categores2,setCategores2]= useState({});
  
  
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res => res.json())
            .then(data => setCategores2(data));
    },[]);
    console.log('categores:'+ categores2)
    // https://fakestoreapi.com/products/category/jewelery
    // `https://fakestoreapi.com/products/${params.categoryName}`
    return(
        <>
           <Header />
           <h2>category : {params.categoryName}</h2>
        </>
        
    );
}
export default Category
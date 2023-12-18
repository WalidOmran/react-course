import {useState} from "react";
import ShowProducts from "./ShowProducts";
import Button from './Button';
function LastProducts (){
    const [count , setCount] = useState(5); 
    function handelClick(){
        if(count <= 20) {
            setCount(count+4);
            <ShowProducts count={count} />
        }else{
            console.log('count :' + count)
        }    
    }
    return(
        <section  className="last-products">
            <div  className="container">
                <h2  className="section_title">Last Products</h2>
                <div className="last-products_aria wo_row">
                    <ShowProducts count={count} />
                </div>
                <Button className="btn load-more_btn"  onClick={handelClick}>
                    Load More
                </Button>
            </div>
        </section>
    );
} 
export default LastProducts
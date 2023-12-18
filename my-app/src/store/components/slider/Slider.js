import SliderItem from "./SliderItem";
// import SliderControls from "./SliderControls";
// import { useState } from "react";
import './Slider.css';
function Slider() { 
//    const [slideIndex,setSideIndex] = useState(4);
    return(
        <section  className="slider">
            <div  className="slider_content wo_flex wo_content-space-between">
                <SliderItem count={3} />
                {/* <a href="#">
                    <section  className="slider_item wo_flex wo_content-space-between wo_items-center">
                    <div  className="slider_text">
                        <h2  className="slider_title">
                        <span>uPhone X</span>
                        IT’S <span  className="big">29%</span> OFF
                        </h2>  
                    </div>
                    <figure  className="slider_img">
                        <img src={sliderImg} alt="slider img"/>
                    </figure>
                    </section>
                </a> */}
                {/* <SliderControls  count={slideIndex}/> */}
            </div>
        </section>
    );
}
export default Slider
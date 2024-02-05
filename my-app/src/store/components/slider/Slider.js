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
            </div>
        </section>
    );
}
export default Slider
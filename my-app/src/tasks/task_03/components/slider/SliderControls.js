import { useState } from "react";
import Button from "../common/Button";
import localSliderItems2 from "../Api/apiSlider";
function SliderControls({count}){
    const [index,setIndex] = useState(count);
    function sliderPrev() {
        setIndex(index - 1)
        console.log('count :'+index);
    }
    function sliderNext() {
        setIndex(index + 1)
        console.log('count :'+index);
    }
    return(
        <div  className="slider_controls">
            <Button id="prev"  className="slider_prev" onClick={sliderPrev}>
                <i  className="fa-solid fa-chevron-left fa-2x"></i>
            </Button>
            <span id="indicators"  className="slider_indicators"></span>
            <Button id="next"  className="slider_next" onClick={sliderNext}>
                <i  className="fa-solid fa-chevron-right fa-2x"></i>
            </Button>
        </div>
    );
}

export default SliderControls
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import localSliderItems2 from "../Api/apiSlider";
import Button from "../common/Button";
function SliderItem({count}){
    const [index,setIndex] = useState(count);
    const [prevStyle,setPrevStyle] = useState('');
    const [nextStyle,setNextStyle] = useState('');
    
    useEffect(()=>{
        setPrevStyle((index >= 1)? 'slider_prev' : 'slider_prev disabled');
        setNextStyle((index <= localSliderItems2.length - 2)? 'slider_next' : 'slider_next disabled');
    },[index]);

    function sliderPrev() {
        setIndex((index >= 1)? index - 1 : index)
    }
    function sliderNext() {
        setIndex((index <= localSliderItems2.length - 2)? index + 1 : index)
    }
    
    return(
        
           <>
                <Link to={`/products/${localSliderItems2[index].id}`} className="slider_item active">
                    <section  className="wo_h-100 wo_flex wo_content-space-between wo_items-center  active">
                        <div  className="slider_text">
                            <h2  className="slider_title">
                                {localSliderItems2[index].title}
                            {/* <span>uPhone X</span>
                            IT’S <span  className="big">29%</span> OFF */}
                            </h2>  
                        </div>
                        <figure  className="slider_img">
                            <img src={localSliderItems2[index].image} alt="slider img"/>
                        </figure>
                    </section>
                </Link>
                <div  className="slider_controls">
                    <Button id="prev"  className={prevStyle} onClick={sliderPrev}>
                        <i  className="fa-solid fa-chevron-left fa-2x"></i>
                    </Button>
                    <span id="indicators"  className="slider_indicators"></span>
                    <Button id="next"  className={nextStyle} onClick={sliderNext}>
                        <i  className="fa-solid fa-chevron-right fa-2x"></i>
                    </Button>
                </div>
           </>
    );
}
export default SliderItem
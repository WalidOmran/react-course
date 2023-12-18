import img_1 from "../../image/brands/brand-1.png";
import img_2 from "../../image/brands/brand-2.png";
import img_3 from "../../image/brands/brand-3.png";
import img_4 from "../../image/brands/brand-4.png";
import img_5 from "../../image/brands/brand-5.png";
import  './Brands.css';
function Brands(){
    return(
        <section className="brands">
            <div className="container">
                <div className="brands_aria wo_row">
                    <figure className="brand_item">
                        <img src={img_1} alt={img_1} className="brand_img" />
                    </figure>
                    <figure className="brand_item">
                        <img src={img_2} alt={img_2} className="brand_img" />
                    </figure>
                    <figure className="brand_item">
                        <img src={img_3} alt={img_3} className="brand_img" />
                    </figure>
                    <figure className="brand_item">
                        <img src={img_4} alt={img_4} className="brand_img" />
                    </figure>
                    <figure className="brand_item">
                        <img src={img_5} alt={img_5} className="brand_img" />
                    </figure>
                </div>
            </div>
        </section>
    );
}
export default Brands
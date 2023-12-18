import { Link } from "react-router-dom";
import banner_1 from '../../image/images/images/63e8c4e61eb4ad4af6e75689_macbook 13-min.png';
import banner_2 from '../../image/images/images/63e8c4e4037f3ba53bcf2021_adidas sneakers-min.png';

function SingleProductBanners(){
    return(
        <div className="wo_row wo_100">
            <section className="single-product_banner">
                <Link to="/#" className="wo_flex wo_content-space-between wo_items-center">
                    <img className="single-product_banner-img" src={banner_1} alt="banner" />
                    <h4 className="single-product_banner-title">banner title</h4>
                    <p className="single-product_banner-price">56$</p>
                </Link>
            </section>
            <section className="single-product_header wo_flex wo_content-center wo_items-center">
                <h2  className="section_title">PRODUCT DETAILS</h2>
            </section>
            <section className="single-product_banner">
                <Link to="/#" className="wo_flex wo_content-space-between wo_items-center">
                    <img className="single-product_banner-img" src={banner_2} alt="banner" />
                    <h4 className="single-product_banner-title">banner title</h4>
                    <p className="single-product_banner-price">56$</p>
                </Link>
            </section>
        </div>
    );
}
export default SingleProductBanners
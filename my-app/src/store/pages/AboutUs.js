import Header from "../components/header/Header";
import ProductBanners from "../components/common/ProductBanners";
import Brands from "../components/brands/Brands";
import Subscribe from "../components/subscribe/Subscribe";
import Footer from "../components/footer/Footer";
function AboutUs(){
    return(
        <>
           <Header />
           <section className="login">
                <ProductBanners headerTitle="ABOUT US" />
                <div className="container">
                    
                </div>  
           </section>
           <Brands />
           <Subscribe />
           <Footer />
        </>
        
    );
}

export default AboutUs
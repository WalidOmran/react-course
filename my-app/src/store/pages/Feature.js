import Header from "../components/header/Header";
import ProductBanners from "../components/common/ProductBanners";
import Brands from "../components/brands/Brands";
import Subscribe from "../components/subscribe/Subscribe";
import Footer from "../components/footer/Footer";
function Feature(){
    return(
        <>
           <Header />
           <section className="Feature">
                <ProductBanners headerTitle="FEATURE" />
                <div className="container">
                </div>  
           </section>
           <Brands />
           <Subscribe />
           <Footer />
        </>
        
    );
}

export default Feature
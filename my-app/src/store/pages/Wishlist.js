import Header from "../components/header/Header";
import ProductBanners from "../components/common/ProductBanners";
import Brands from "../components/brands/Brands";
import Subscribe from "../components/subscribe/Subscribe";
import Footer from "../components/footer/Footer";
function Wishlist(){
    return(
        <>
           <Header />
           <section className="Wishlist">
                <ProductBanners headerTitle="WISHLIST" />
                <div className="container">
                    
                </div>  
           </section>
           <Brands />
           <Subscribe />
           <Footer />
        </>
        
    );
}

export default Wishlist
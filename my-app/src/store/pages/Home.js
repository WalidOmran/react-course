import Header from "../components/header/Header";
// import Product from "./Product";
import Slider from "../components/slider/Slider";
import Delivery from "../components/delivery/Delivery";
import Installments from "../components/buy-installments/Installments";
import Discover from "../components/discover-more/Discover";
import Offers from "../components/today-offers/Offers";
import SignIn from "../components/sign-in/SignIn";
import Brands from "../components/brands/Brands";
import Subscribe from "../components/subscribe/Subscribe"
import Footer from "../components/footer/Footer";
import '../css/main.css';
function Home (){
    return(
        <>
          <Header />
          <Slider />
          <Delivery />
          <Installments />
          <Discover />
          <Offers /> 
          <SignIn />
          <Brands />
          <Subscribe />
          <Footer/>
        </>
        
    );
}
export default Home 
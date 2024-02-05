// Register
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import ProductBanners from "../components/common/ProductBanners";
import Brands from "../components/brands/Brands";
import Subscribe from "../components/subscribe/Subscribe";
import Footer from "../components/footer/Footer";
import Form from "../components/common/Form";
import Input from "../components/common/Input";
import Label from "../components/common/Label";
import './Login.css';
import ImagePlaceholder from '../image/account-image-placeholder.jpg'
function Register(){
    return(
        <>
           <Header />
           <section className="user-section">
                <ProductBanners headerTitle="Register" />
                <Form className="user-form" action="" method="get">
                    <div className="container">
                        <div className="user-desc">
                            <h3 className="user-desc_title">We will need for your registration</h3>
                            <p className="user-desc_text">
                                ShopCart  provide how all this mistaken idea of denouncing 
                                pleasure and sing pain born an will give you a complete 
                                account of the system, and expound
                            </p>
                        </div>
                        <div className="user_aria">

                            <section className="user_left-section">
                                
                                
                                    <div className="user-form_item">
                                        <Input 
                                            className="user-form_input"
                                            type="text" name="username"
                                            placeholder="Your name here"
                                        />
                                    </div>
                                    <div className="user-form_item">
                                        <Input 
                                            className="user-form_input"
                                            type="email" name="email"
                                            placeholder="Your email here"
                                        />
                                    </div>
                                    <div className="user-form_item">
                                        <Input 
                                            className="user-form_input"
                                            type="password" name="password"
                                            placeholder="Enter password"
                                        />
                                    </div>
                                    <div className="user-form_item">
                                        <Input 
                                            className="user-form_input"
                                            type="password" name="conform-password"
                                            placeholder="Conform password"
                                        />
                                    </div>
                                    <div className="user-form_item">
                                        <Input 
                                            className="user-form_btn"
                                            type="submit" name="Register"
                                            value="Register"
                                        />
                                    </div>
                                
                                <h4>
                                    Do you have account? please click 
                                    <Link to="/login" className="user-form_register-link"> login</Link>
                                </h4>
                            </section>
                            <section className="user_mid-section">
                                <div class="user_vertical-border"></div>
                            </section>
                            <section className="user_right-section">
                                <div class="user_upload">
                                    <h3 className="user_social-title">Upload your Image</h3>
                                    <img className="user_image-upload" src={ImagePlaceholder} alt="Image Placeholder"/>
                                    <div class="account-image-upload">
                                        <Input className="user_account-image-input" type="file" name="chooseFile" id="account-image-upload"/>
                                        <label className="user_account-image-label" for="account-image-upload">Choose your image</label>
                                        <p className="user_account-image-text">jpEG 250x250</p>
                                    </div>
                                    
                                </div>
                            </section>
                        </div>  
                    </div>
                </Form>
           </section>
           <Brands />
           <Subscribe />
           <Footer />
        </>
        
    );
}

export default Register
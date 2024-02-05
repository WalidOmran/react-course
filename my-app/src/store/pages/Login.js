// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import ProductBanners from "../components/common/ProductBanners";
import Brands from "../components/brands/Brands";
import Subscribe from "../components/subscribe/Subscribe";
import Footer from "../components/footer/Footer";
import Form from "../components/common/Form";
import Input from "../components/common/Input";
import Label from "../components/common/Label";
import './Login.css';
import { Link } from "react-router-dom";
function Login(){
    return(
        <>
           <Header />
           <section className="user-section">
                <ProductBanners headerTitle="Login" />
                <div className="container wo_flex">
                    <div className="user-desc">
                        <h3 className="user-desc_title">login to your account</h3>
                        <p className="user-desc_text">
                            ShopCart provide how all this mistaken idea of denouncing pleasure and sing pain born an will give you a complete account of the system, and expound
                        </p>
                    </div>
                    <section className="user_left-section">
                        
                        <Form className="user-form" action="" method="get">
                            <div className="user-form_item">
                                <Input 
                                    className="user-form_input"
                                    type="text" name="username"
                                    placeholder="Type your username or email address"
                                />
                            </div>
                            <div className="user-form_item">
                                <Input 
                                    className="user-form_input"
                                    type="password" name="password"
                                    placeholder="Type your password"
                                />
                            </div>
                            <div className="user-form_item  wo_flex wo_content-space-between">
                                <div>
                                    <Input className="user-form_remember-me"  type="checkbox" id="remember_me" />
                                    <Label className="user-form_label" for="remember_me">Remember me</Label>                       
                                </div>
                                <div>
                                    <a href="#">Forgotten pasward?</a>
                                </div>
                            </div>
                            <div className="user-form_item">
                                <Input 
                                    className="user-form_btn"
                                    type="submit" name="login"
                                    value="login"
                                />
                            </div>
                        </Form>
                        <h4 className="user-form_register-text">
                            Don’t have account? please click 
                            <Link to="/register" className="user-form_register-link"> Register</Link>
                        </h4>
                    </section>
                    <section className="user_mid-section">
                        <div class="user_vertical-border"></div>
                    </section>
                    <section className="user_right-section">
                        <div class="user_social">
                            <h3 className="user_social-title">Also you can user with...</h3>
                            
                            <div className="user_social-links">
                                <Link to="#" class="user_social-link facebook">
                                    login with <i class="fa fa-facebook"></i>
                                </Link>
                                <Link to="#" class="user_social-link twitter">
                                    login with <i class="fa fa-twitter"></i>
                                </Link>
                                <Link to="#" class="user_social-link google-plus">
                                    login with <i class="fa fa-google-plus"></i>
                                </Link>
                            </div>
                            
                        </div>
                    </section>
                </div>  
           </section>
           <Brands />
           <Subscribe />
           <Footer />
        </>
        
    );
}

export default Login
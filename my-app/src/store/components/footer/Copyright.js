import imgSrc from '../../image/payment-support.png'
function Copyright() {
    return(
        <section className="main-footer_copyright">
            <div className="container">
                <div className="main-footer_copyright-content wo_row">
                    <img src={imgSrc} alt="payment-support"/>
                    <p className="main-footer_copyright-text">
                        © Copyright, 2024 All Rights Reserved by 
                        <a href="#" className="main-footer_copyright-link"> Walid Omran</a>
                    </p>
                    
                </div>
            </div>
        </section>
    );
}
export default Copyright
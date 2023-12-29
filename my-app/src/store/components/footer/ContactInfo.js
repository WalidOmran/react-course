function ContactInfo() {
    return(
        <div className="main-footer_widget">
            <h4 className="main-footer_widget-title">CONTACT INFO</h4>
            <div>
                <div class="main-footer_widget-contact">
                    <h4 className="main-footer_widget-contact-title">Address</h4>
                    <p className="main-footer_widget-dec">
                        You address will be here 
                        <br/>
                        Lorem Ipsum text 
                    </p>                       
                </div>
                <div class="main-footer_widget-contact">
                    <h4 className="main-footer_widget-contact-title">Phone</h4>
                    <a href="tel:01234567890" className="main-footer_widget-list-link">01234 567 890</a>
                    <br/>
                    <a href="tel:01234567891" className="main-footer_widget-list-link">01234 567 891</a>
                </div>
                <div class="main-footer_widget-contact">
                    <h4 className="main-footer_widget-contact-title">Web</h4>
                    <a href="mailto:info@example.com" className="main-footer_widget-list-link">info@example.com</a>
                    <br/>
                    <a href="#" className="main-footer_widget-list-link">www.example.com</a>       
                </div>
            </div>
        </div>
    );
}
export default ContactInfo
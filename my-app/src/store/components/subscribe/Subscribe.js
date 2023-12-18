import Form from '../common/Form';
import Input from '../common/Input';
import Label from '../common/Label';
import './Subscribe.css';
function Subscribe(){
    function handleSubscribe(){
        console.log("Handel Form");
    }
    return(
        <section className="subscribe">
            <div className="container">
                <section className="subscribe_content wo_row">
                    <div className="subscribe_desc">
                        <h2 className="subscribe_title">
                            SUBSCRIBE
                            <span>OUR NEWSLETTER</span> 
                        </h2>
                        <h2 className="subscribe_title">
                            <span>TO GET LATEST</span>
                            PRODUCT UPDATE
                        </h2>
                    </div>
                    <Form className="subscribe_form main-header_form"
                        action="" 
                        method="get"
                        eventName='onSubmit'
                        onEvent={handleSubscribe}>
                            <Input  className="main-header_search-input"
                                    type="text" 
                                    name="subscribe" 
                                    placeholder="Enter your email here"
                            />
                            <Label className="main-header_search-icon" forValue="mainHeaderSearch">
                                subscribe
                            </Label>
                    </Form>
                </section>
            </div>
        </section>
    );
}
export default Subscribe 
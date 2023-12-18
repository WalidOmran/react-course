import Form from "../common/Form";
import Input from "../common/Input";
import Label from "../common/Label";
function Search(){
    function handleForm(){
        console.log("Handel Form");
    }
    return(
        <div className="main-header_search">
            <Form 
                className="main-header_form"
                action="" 
                method="get"
                eventName='onSubmit'
                onEvent={handleForm}>
                <Input
                    className="main-header_search-input"
                    type="search" 
                    name="search" 
                    id="mainHeaderSearch"
                    placeholder="Search Product"
                 />
                <Label className="main-header_search-icon" forValue="mainHeaderSearch">
                    <span>
                        <i className="fa-solid fa-search fa-lg"></i>
                    </span>
                </Label>
            </Form>
        </div> 
    );
}
export default Search
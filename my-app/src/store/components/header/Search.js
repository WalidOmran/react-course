import { useState } from 'react';
import Form from "../common/Form";
import Input from "../common/Input";
import Label from "../common/Label";
function Search(){
    const [query, setQuery] = useState('');
    function handleForm(e){
        setQuery(e.target.value);
        console.log('Query form : ' + query);
    }
    
    function handleSearchChange(e)
    {
        setQuery(e.target.value);
        console.log('Query : ' + query);
    }
    return(
        <div className="main-header_search">
            <Form className="main-header_form" action="" method="get">
                <Input
                    className="main-header_search-input"
                    type="search" 
                    name="search" 
                    id="mainHeaderSearch"
                    placeholder="Search Product"
                    onChange={handleSearchChange}
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
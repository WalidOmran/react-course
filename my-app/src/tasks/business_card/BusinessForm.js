import { useState } from "react";
import Input from "./Input";
function BusinessForm({data}){
    // let [data,setDate] = useState({data});
    
    return(
        <form className='business-form'>
            <div className='business-form_item'>
            <input className='business-form_input'
               type='text' 
               placeholder='Enter Your Name'
               onChange={handelChange}    
            />
            </div>
            {/* <div className='business-form_item'>
                <input onChange={handelUrl} className='business-form_input'
                 type='url' placeholder='Enter src for your image'/>
                <input onChange={handelName} className='business-form_input'
                 type='text'  placeholder='Enter Your Name'/>
            </div>
            <div className='business-form_item'>
                <input onChange={handelEmail} className='business-form_input' type='email' placeholder='Enter Your Email' />
                <input onChange={handelPhone} className='business-form_input' type='tel' placeholder='Enter Your phone' />
                <input onChange={handelAddress} className='business-form_input' type='text' placeholder='Enter Your Address' />
            </div>
            <div className='business-form_item'>
                <textarea className='business-form_input'  placeholder='Enter Your discrption'>

                </textarea>
            </div> */}
            {/* <input className='business-form_submit' type='submit' value='submit'/> */}
        </form>
    );
}
export default BusinessForm
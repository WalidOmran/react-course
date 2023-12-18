// import { useState } from "react";
function Form({className,action,method,eventName,onEvent,children}){
    function handleClick(e){
        e.stopPropagation();
        e.preventDefault();
        onEvent();
    }
    // let [test,setTest] = useState('onSubmit');
    // let test = eventName;
    // console.log("event:"+ test);
    return(
        <form 
            className={className} 
            action={action} 
            method={method}
            onSubmit={handleClick}>
                {children}
        </form>
    );
}
export default Form 
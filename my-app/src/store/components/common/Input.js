import productsData from "../Api/apiProducts";
function Input({className,type,name,id,placeholder,value}){
    // function handleClick(e){
    //     e.stopPropagation();
    //     e.preventDefault();
    //     console.log('handleInput')
    // }
    function handelChange(e){
        const filterData = productsData.filter((item)=>
            item.name === e.target.value
        )
        filterData.map((item)=>
            console.log(item)
        )
        // console.log(filterData)
    }
    return(
        <input className={className}
               type={type} 
               name={name}
               id={id}
               placeholder={placeholder} 
               onChange={handelChange}
               value={value}    
        />
    );
}
export default Input
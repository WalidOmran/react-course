function Button({className,children,onClick}){
    // function handleClick(e){
    //     e.stopPropagation();
    //     e.preventDefault();
    //     console.log('handleClick')
    // }
    function handleClick(e){
        onClick();
        // console.log('handleClick');
    }
    return(
        <button className={className} onClick={handleClick} >
            {children}           
        </button>
    );
}
export default Button 
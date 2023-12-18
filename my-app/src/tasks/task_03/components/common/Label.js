function Label({className,forValue,children}){
    return(
        <label className={className} for={forValue} >
            {children}
        </label>
    );
}

export default Label
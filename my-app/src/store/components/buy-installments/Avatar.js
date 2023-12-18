function Avatar({i}){
    return(
        <figure className="buy-installments_item-content">
            <img 
                className="buy-installments_img" 
                src={i.image} 
                alt={i.title}
            />
            <figcaption className="buy-installments_item-caption">
                {i.title}
            </figcaption>
        </figure>
        
    );
}
export default Avatar
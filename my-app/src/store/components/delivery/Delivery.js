import shipping from "../../image/free shipping.png";
import './Delivery.css';
const deliveryItem = {
    title:'Free delivery on your first purchase',
    img: {
        src: shipping,
        alt: 'Free delivery'
    }
}

function Delivery() {
    return(
        <section  className="delivery">
            <div  className="container">
            <div  className="delivery_content wo_flex">
                <h2  className="delivery_title">{deliveryItem.title}</h2>
                <figure  className="delivery_img">
                    <img  
                        src={deliveryItem.img.src}
                        alt={deliveryItem.img.alt}
                    />
                </figure>
            </div>
            </div>
        </section>
    );
}

export default Delivery
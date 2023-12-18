import Product from "./Product";
function Offers (){
    return(
        <section  className="today-offers">
            <div  className="container">
                <h2  className="section_title">Today's Offers!</h2>
                <Product />
            </div>
        </section>
    );
}
export default Offers
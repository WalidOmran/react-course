import img from './img/01.png';
function Card() {
    return(
        <section className="card">
            <button className="card_icon" >
                <img src={img} alt="Add" />
            </button>
            <h3 className="card_title">Write New Card</h3>
            <p className="card_desc">Your entire product design workflow - connected</p>
        </section>
        
    );
}
export default Card
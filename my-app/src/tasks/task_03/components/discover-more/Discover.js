import Airpod from "../../image/discover-more/airpod max-min.png";
function Discover(){
    return(
        <section  className="discover-more">
            <div  className="container">
            <a href="#">
                <div  className="discover-more_area wo_flex wo_content-space-between wo_items-center">
                <figure  className="discover-more_img">
                    <img  className="" src={Airpod} alt="discover more img"/>
                </figure>
                <h2  className="discover-more_title">
                    Discover 
                    <span> out more</span>
                    Shop All 
                    <span> Offers</span>
                </h2>
                </div>
            </a>
            </div>
        </section>
    );
}
export default Discover
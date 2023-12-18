import installmentsData from "./installmentsData";
import Avatar from "./Avatar";


function InstallmentsArea(){
    return(
       <div className="buy-installments_area wo_flex wo_content-space-between">
          {
            installmentsData.map(
                (item) =>
                <section className="buy-installments_item">
                    <a href="#">
                        <Avatar
                            i ={{
                                image :item.image
                                ,title  : item.title
                            }} 
                        />
                    </a>
                </section>
            )
          }
       </div>
    );
}

export default InstallmentsArea
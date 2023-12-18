import img from './1.jpg';
function BusinessCardInfo({data}){
    return(
        
        <div className='business-card_personal-info'>
            <img src={data.image.url ? data.image.url: img } alt='business card img' className='business-card_img'/>
            <h2 className='business-card_name'>
                {data.personalInfo.fName + ' ' + data.personalInfo.lName } 
            </h2>
            <p className='business-card_job-title'>{data.businessInfo.jobTitle}</p>
            <ul className='business-card_list'>
                <li className='business-card_list-item'>Email : {data.businessInfo.email} </li>
                <li className='business-card_list-item'>Phone : {data.businessInfo.phone}</li>
                <li className='business-card_list-item'>Address : {data.businessInfo.address}</li>    
            </ul>
        </div>
    );
}
export default BusinessCardInfo
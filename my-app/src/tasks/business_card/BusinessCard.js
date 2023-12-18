import { useState } from 'react';
import BusinessCardInfo from './BusinessCardInfo';
import img from './1.jpg'
import './BusinessCard.css';

// import BusinessForm from './BusinessForm';
function BusinessCard(){
    const [data,setDate] = useState({
        image: {
            url: ''   
        },
        personalInfo:{
            fName:'',
            lName: ''
        },
        businessInfo: {
            jobTitle: '',
            email : '',
            phone: '',
            address: ''
        }
        
    });
    const [progressValueForPersonal,setProgressValueForPersonal] = useState(0);
    const [progressValueForImage,setProgressValueForImage] = useState(0);
    const [progressValueForBusiness,setProgressValueForBusiness] = useState(0);
    // business
    function handelUrl(e){
        setDate({
           ...data,
           image : {
            url: e.target.value
           }
           
        });
    }
    function handelFirstName(e){
        setDate({
           ...data,
           personalInfo: {
            ...data.personalInfo,
            fName: e.target.value
           }
        });
    }
    function handelProgressValueForImage(e) {
        if(data.image === '' &&  progressValueForImage > 0){
            setProgressValueForImage(progressValueForImage - (100 / 3));
        }else if(!data.image == ''  && progressValueForImage < (100 / 3)){
            setProgressValueForImage(progressValueForImage + (100 / 3));
        }else {
            setProgressValueForImage(progressValueForImage)
        }
    }
    function handelProgressValueForPersonal(e) {
        if(data.personalInfo.fName === '' && data.personalInfo.lName === '' && progressValueForPersonal > 0){
            setProgressValueForPersonal(progressValueForPersonal - (100 / 3));
        }else if(!data.personalInfo.fName == '' && !data.personalInfo.lName == '' && progressValueForPersonal < (100 / 3)){
            setProgressValueForPersonal(progressValueForPersonal + (100 / 3));
        }else {
            setProgressValueForPersonal(progressValueForPersonal)
        }
    }
    function handelProgressValueForBusiness(e) {
        if(data.businessInfo.jobTitle === '' && data.businessInfo.email === '' && 
           data.businessInfo.phone === '' && data.businessInfo.address === '' && 
           progressValueForBusiness > 0
           ){
            setProgressValueForBusiness(progressValueForBusiness - (100 / 3));
        }else if(!data.businessInfo.jobTitle == '' && !data.businessInfo.email == '' && 
                !data.businessInfo.phone == '' && !data.businessInfo.address == '' &&
                progressValueForBusiness < (100 / 3)
                ){
            setProgressValueForBusiness(progressValueForBusiness + (100 / 3));
        }else {
            setProgressValueForBusiness(progressValueForBusiness)
        }
    }
    function handelLastName(e){
        setDate({
           ...data,
           personalInfo: {
            ...data.personalInfo,
            lName: e.target.value
           }
        });
    }
    function handelJobTitle(e){
        setDate({
            ...data,
            businessInfo : {
                ...data.businessInfo,
                jobTitle: e.target.value
            }
           
        });
    }
    function handelEmail(e){
        // console.log(e.target.value)
        setDate({
            ...data,
            businessInfo : {
                ...data.businessInfo,
                email: e.target.value
            }
           
        });
    }
    function handelPhone(e){
        setDate({
           ...data,
           businessInfo : {
                ...data.businessInfo,
                phone: e.target.value
           }
        });
    }
    function handelAddress(e){
        setDate({
           ...data,
           businessInfo : {
                ...data.businessInfo,
                address: e.target.value
           }
        });
    }
    
    return(
        <>
            <section className="business-card_main">
                <section className='left'>
                    <section className='business-card'>
                        <BusinessCardInfo data={data}/>
                    </section>
                </section>
                <section className='right'>
                    {/* <BusinessForm data={data}/> */}
                    <form className='business-form'>
                        <div className='business-form_item'>
                            <input
                                    onChange={handelUrl} 
                                    onBlur={handelProgressValueForImage}
                                    className='business-form_input input--url'
                                    type='url'
                                    placeholder='Enter src for your image'/>
                        </div>
                        <div className='business-form_item'>
                            <h2 className='business-form_title'>Personal Info</h2>
                        </div>
                        <div className='business-form_item'>
                            <input 
                                    onChange={handelFirstName} 
                                    onBlur={handelProgressValueForPersonal} 
                                    className='business-form_input' type='text'
                                    placeholder='Enter Your First Name'
                            />
                            <input 
                                    onChange={handelLastName} 
                                    onBlur={handelProgressValueForPersonal} 
                                    className='business-form_input' type='text'
                                    placeholder='Enter Your Last Name'
                            />
                        </div>
                        
                        <div className='business-form_item'>
                            <h2 className='business-form_title'>Business Info</h2>
                        </div>
                        <div className='business-form_item'>
                            <input 
                                onChange={handelJobTitle} 
                                onBlur={handelProgressValueForBusiness} 
                                className='business-form_input' type='text' 
                                placeholder='Enter Your Job Title'
                            />
                            <input 
                                onChange={handelEmail}
                                onBlur={handelProgressValueForBusiness} 
                                className='business-form_input'
                                type='email'
                                placeholder='Enter Your Email' 
                            />
                        </div>
                        <div className='business-form_item'>
                            <input 
                                onChange={handelPhone}
                                onBlur={handelProgressValueForBusiness} 
                                className='business-form_input' 
                                type='tel' placeholder='Enter Your phone' 
                            />
                            <input
                                onChange={handelAddress}
                                onBlur={handelProgressValueForBusiness} 
                                className='business-form_input' 
                                type='text' placeholder='Enter Your Address' 
                            />
                        </div>
                    </form>
                </section>
            </section>
            <section className='business-card_progress'>
                <p className='business-card_progress-text'>
                    {progressValueForImage + progressValueForPersonal + progressValueForBusiness}%
                </p>
                <progress 
                    value={progressValueForImage + progressValueForPersonal + progressValueForBusiness} max='100'>
                    {progressValueForImage + progressValueForPersonal + progressValueForBusiness} %
                </progress>
            </section>
        </>
    );
}
export default BusinessCard
import React from 'react'
import './Header.css'
import img1 from '../../assets/img1.jpg';
import { assets } from '../../assets/assets';

const Header = () => {
    const headerContent = [
        {
            className: "clinicConsulation",
            imgSrc: assets.chatImg,
            alt: "Chat Icon",
            description: "Convenient Online & In-clinic Consultations"
        },
        {
            className: "safty",
            imgSrc: assets.safetyImg,
            alt: "Safety Icon",
            description: "Safe And Effective Treatment"
        },
        {
            className: "experiance",
            imgSrc: assets.doctoricon,
            alt: "Doctor Icon",
            description: "Experienced Ayurvedic Practitioner"
        },
        {
            className: "guidance",
            imgSrc: assets.prescription,
            alt: "Prescription Icon",
            description: "Personalized Treatment Plans & Guidance"
        }
    ];
    return (
        <>
            <div className="header" style={{ backgroundImage: `url(${img1})` }}>
                <div className="header-content">

                    <p className='header-p1'>Namaste, Welcome to Amrutam</p>
                    <h1>Step into Holistic Healing with <span>Ayurveda</span><br />book Consultation with Certified Experts.</h1>
                    <h6 className='header-p2'>Dive into the world of ayurveda and experience personalized health solutions and <br />
                        holistic guidance from trusted ayurvedic doctors anytime,anywhere.</h6>
                    <button>BOOK AN APPOINMENT</button>
                </div>
            </div>
            <div className="header-bottomContent">
                {headerContent.map((detail,index)=>{
                    return (
                        <div className={`${detail.className} content`} key={index}>
                        <img src={detail.imgSrc} height="45px" alt={detail.alt} />
                        <p>{detail.description}</p>
                    </div>          
                )
            })}
                
            </div>
        </>

    )
}

export default Header

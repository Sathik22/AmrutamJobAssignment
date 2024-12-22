import React from 'react'
import './Consultation.css'
import { assets } from '../../assets/assets'
const Consultation = () => {

    return (
        <div className='Consultation-cotainer'>
            <div className="consultation-head">
                <h1>What sets Ayurvedic consultation apart?</h1>
            </div>
            <div className="consutltation-bottom">
                <div className="consultation-content">
                    <h4>स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।"</h4>
                    <p>[Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person.]</p>
                </div>
                <div className="consultation-content-img">
                    <img src={assets.consultationImg2} width="250px" alt="" />
                </div>
                <div className="consultation-content">
                    <h4>Precise Diagnosis</h4>
                    <p>Ayurveda's core principles revolve around Vata, Pitta, and Kapha doshas, guiding you with precise diagnosis and treatment.</p>
                </div>
                <div className="consultation-content">
                    <h4>Zero side-effects</h4>
                    <p>Ayurvedic treatments are devoid of chemicals, and are based completely on natural herbs</p>
                </div>
                <div className="consultation-content-img">
                    <img src={assets.consultationImg1} width="250px" alt="" />

                </div>

                <div className="consultation-content">
                    <h4>Individual Treatment
                    </h4>
                    <p>All Treatments are personalized based on a persen's unique constitution and health concerns</p>
                </div>
                <div className="consultation-content-img">
                    <img src={assets.consultationImg3} width="250px" alt="" />
                </div>
            </div>

        </div>
    )
}

export default Consultation

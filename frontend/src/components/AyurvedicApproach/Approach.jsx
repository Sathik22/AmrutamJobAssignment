import React from 'react'
import './Approach.css'
import comboImg from '../../assets/comboImg.jpg';

const Approach = () => {
  return (
    <>
      <div className='ayurvedicApproach'>
        <div className="approcahead" style={{ backgroundImage: `url(${comboImg})` }}>
          <div className="Approach-content">
            <h1>Ready to restore harmony in your mind, body and spirit?</h1>

            <button>Book a cunsultation</button>
          </div>
        </div>
      </div>
      <div className="approachBottom">
          <div className="bottom-container">
              <div className="bottom-heading">
                <h1>Our Ayurvedic Approach</h1>
                <div className="bottom-paragraph">
                <p>At Amrutam we follow a unique and personalized approach to healing. Our expert practitioners begin each treatment process ny conducting a through analysis of the patient's body type, medical history and current health conditions.</p>
                </div>
               
              </div>
              <div className="bottom-step-container">
                <div className="step-content">
                  <h1>1</h1>
                  <h4>Make Appoinment</h4>
                  <p>You must make an appoinment in advance, to choose the service and date.</p>
                </div>
                <div className="step-content">
                  <h1>2</h1>
                  <h4>Consultation</h4>
                  <p>The next stage involves a thorough consuktation with an Ayurveda pratitioner.</p>
                </div>
                <div className="step-content">
                  <h1>3</h1>
                  <h4>Treatment Planning</h4>
                  <p>The Ayurvedic Practioner creates personalized treatment plan for you</p>
                  
                </div>
                <div className="step-content">
                  <h1>4</h1>
                  <h4>Maintenance</h4>
                  <p>These visits allow for assesment of progress, adjustement to the treatment.</p>
                </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Approach

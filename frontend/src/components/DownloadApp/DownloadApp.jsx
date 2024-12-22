import React from 'react'
import { assets } from '../../assets/assets'; 
import './DownloadApp.css'

const DownloadApp = () => {
  return (
    <div className='DownloadApp-container1'>
      <div className='DownloadApp-container'>
        <div className="DownloadApp-Iphone-img">
        <img src={assets.iphoneImg} alt="" />
        </div>
        <div className="Downloadapp-content">
            <h1 className='download-app-heading1'>Amrutam Home App</h1>
            <p>The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant characteristics of our website, this app offers a wide range of additional features.</p>
            </div>
            </div>

            <div className="downloadapp-img">
            <h1 className='heading1'>Get A Diet & Lifestyle Consultation With Ayurvedic Experts Across The Globe</h1>

                <h1 className='heading2'>Get The App Now</h1>
                <div className="playstoreImg">
                    <img src={assets.playStoreImg}  width="150px" height="65px" alt="" />
                    <img src={assets.applestoreImg} width="150px" height="65px" alt="" />
                </div>
            </div>

    </div>
  )
}

export default DownloadApp

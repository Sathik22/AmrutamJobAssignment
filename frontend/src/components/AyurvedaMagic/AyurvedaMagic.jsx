import React from 'react'
import './AyurvedaMagic.css'
import { assets } from '../../assets/assets'
const AyurvedaMagic = () => {
    return (
        <div className='ayurvedicContainer'>
            <div className="ayurvedic-header">
                <h1>Discover Ayurveda's Magic With Us</h1>
                <div className="bottom-paragraph">
                    <p>Ayurvedic treatment aims to balance your body and mind, bringing harmony and vitality. It's like a journey to better health using ancient wisdom, a totally effective approach for a bettter life.</p>
                </div>
            </div>
            <div className="ayurvedic-bottom-container">
                <div className="ayurvedic-content left">
                    <div className="ayurvediccontent">
                        <div className=" ayurvedic-paragraph-content">
                            <h4>Personalized Wellness</h4>
                            <p>Get treatment mad just for you based on your individual body type</p>
                        </div>
                        <img src={assets.heartplusImg} width="45px" alt="" />
                    </div>
                    <div className="ayurvediccontent">
                        <div className="ayurvedic-paragraph-content">
                            <h4>Focus on prevention</h4>
                            <p>Stop problems even before they start.</p>
                        </div>
                        <img src={assets.canserImg} width="45px" alt="" />
                    </div>
                    <div className="ayurvediccontent">
                        <div className="ayurvedic-paragraph-content">
                            <h4>Mind-Body Connection</h4>
                            <p>Keep your mind and body in sync for a happy life.</p>
                        </div>
                        <img src={assets.yoga1} width="45px" alt="" />
                    </div>
                </div>
                <div className="yogaImg-center">
                    <img src={assets.yogaImg} width="400px" alt="" />
                </div>
                <div className="ayurvedic-content right">
                    <div className="ayurvediccontentRight">
                        <img src={assets.healingImg} width="45px" alt="" />
                        <div className="ayurvedic-paragraph-content">
                            <h4>Holistic Healing</h4>
                            <p>Fix the root problem for longlasting health.</p>
                        </div>
                    </div>
                    <div className="ayurvediccontentRight">
                        <img src={assets.naturalImg} width="45px" alt="" />
                        <div className="ayurvedic-paragraph-content">
                            <h4>Natural Remedies</h4>
                            <p>Using herbs and natural therapist for healing.</p>
                        </div>
                    </div>
                    <div className="ayurvediccontentRight">
                        <img src={assets.strongImg} width="45px" alt="" />
                        <div className="ayurvedic-paragraph-content">
                            <h4>Boosting immunity</h4>
                            <p>Stay strong and healthy for life, not just for today.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AyurvedaMagic

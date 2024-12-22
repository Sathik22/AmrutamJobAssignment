import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Approach from '../../components/AyurvedicApproach/Approach'
import AyurvedaMagic from '../../components/AyurvedaMagic/AyurvedaMagic'
import Consultation from '../../components/Consultation/Consultation'
import CustomerReview from '../../components/CustomerReview/CustomerReview'
import Experts from '../../components/Experts/Experts'
import DownloadApp from '../../components/DownloadApp/DownloadApp'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AyurvedaMagic />
      <Consultation />  
      <Approach />
      <CustomerReview />
      <Experts />
      <DownloadApp />
      <Footer />
    </div>
  )
}

export default Home

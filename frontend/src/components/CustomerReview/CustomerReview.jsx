import React from 'react';
import './CustomerReview.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { assets } from '../../assets/assets'; 

const CustomerReview = ({ deviceType }) => {
  const reviews = [
    {
      title: 'Consultation for Skin',
      name: 'Sophia Moore',
      location: 'Chennai',
      date: '21/12/24',
      rating: 'One of the best services',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, aliquam consequatur quaerat iste asperiores.',
    },
    {
      title: 'Consultation for Hair',
      name: 'John Doe',
      location: 'Bangalore',
      date: '20/11/24',
      rating: 'Exceptional experience',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, officia libero quia maiores tempora!',
    },
    {
        title: 'Consultation for Skin',
        name: 'Sophia Moore',
        location: 'Chennai',
        date: '21/12/24',
        rating: 'One of the best services',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, aliquam consequatur quaerat iste asperiores.',
      },
      {
        title: 'Consultation for Hair',
        name: 'John Doe',
        location: 'Bangalore',
        date: '20/11/24',
        rating: 'Exceptional experience',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, officia libero quia maiores tempora!',
      },
    
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 750 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 750, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="Ayurvedic-experts-container">
      <div className="review-heading ">
        <h1>Stories from our valued customers!</h1>
      </div>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={deviceType !== 'mobile'}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {reviews.map((review, index) => (
          <div className="Reviewbox" key={index}>
            <p className="para-head">{review.title}</p>
            <div className="profile-pic">
              <div className="profile-img"></div> 
              <div className="profile-name">
                <h4>{review.name}</h4>
                <p>{review.location}</p>
              </div>
              <p>{review.date}</p>
            </div>
            <div className="rating-content">
              <img src={assets.ratingstar} alt="Rating Star" />
              <h3>"{review.rating}"</h3>
              <p>{review.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomerReview;

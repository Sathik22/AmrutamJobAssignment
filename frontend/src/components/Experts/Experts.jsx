import React from 'react';
import './Experts.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { assets } from '../../assets/assets'; // Replace with the actual path to the image

const Experts = ({ deviceType }) => {
    const reviews = [
        {
            title: 'Consultation for Skin',
            name: 'Dr. Sophia Moore',
            location: 'Chennai',
            date: '21/12/24',
            rating: 'One of the best services',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, aliquam consequatur quaerat iste asperiores.',
        },
        {
            title: 'Consultation for Hair',
            name: 'Dr. John Doe',
            location: 'Bangalore',
            date: '20/11/24',
            rating: 'Exceptional experience',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, officia libero quia maiores tempora!',
        },
        {
            title: 'Consultation for Skin',
            name: 'Dr. Sophia Moore',
            location: 'Chennai',
            date: '21/12/24',
            rating: 'One of the best services',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, aliquam consequatur quaerat iste asperiores.',
        },
        {
            title: 'Consultation for Hair',
            name: 'Dr. John Doe',
            location: 'Bangalore',
            date: '20/11/24',
            rating: 'Exceptional experience',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, officia libero quia maiores tempora!',
        },
        // Add more review objects as needed
    ];

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 650 },
            items: 2,
            slidesToSlide: 2,
        },
        mobile: {
            breakpoint: { max: 650, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };

    return (
        <div className="Ayurvedic-experts-container">
            <div className="Experts-heading">
                <h1>Meet Our Ayurveda Experts</h1>
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
                    <div className="ExpertContainer" key={index}>
                        <div className="expert-image">
                            <img className='profile-img1' src={assets.expertImg} width="250px" alt="" />
                            <p className='profile-img2'>4.5⭐</p>

                        </div>
                        <div className="experts-content">
                            <h2>{review.name}</h2>
                            <p className='p2'>{review.title}</p>
                            <p>🎓{review.location}</p>
                            <p>hair Specialist</p>
                        </div>
                        <div className="para-bottom">
                            <p>Book a Session</p>
                        </div>

                    </div>
                ))}
            </Carousel>
            <div className='expers-bottom-button'>
                <button>Find more Experts </button>
            </div>
        </div>
    );
};

export default Experts;

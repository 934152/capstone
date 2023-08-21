import React from 'react';
import reviewer1 from '../assets/reviewer1.jpg';
import reviewer2 from '../assets/reviewer2.jpg';
import reviewer3 from '../assets/reviewer3.jpg';

const Testimonials = () => {
  return (
    <div className="testimonials-parent">
        <p className="testimonials-title">Testimonials</p>
        <div className="testimonials">
            <div className="testimonial">
                <img className="reviewer-img" src={reviewer1} alt="greek salad"/>
                <div className="name-rating">
                    <p className="reviewer-name">Ahmad M</p>
                    <p className="reviewer-rating">5/5</p>
                </div>
                <div className="review-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa massa, 
                        semper sed enim at, faucibus mattis lorem. Donec vehicula, leo ut auctor ullamcorper, 
                        diam tortor dignissim velit, ac iaculis libero lacus non diam. </p>
                </div>
            </div>
            <div className="testimonial">
                <img className="reviewer-img" src={reviewer2} alt="greek salad"/>
                <div className="name-rating">
                    <p className="reviewer-name">Amir E</p>
                    <p className="reviewer-rating">5/5</p>
                </div>
                <div className="review-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa massa, 
                        semper sed enim at, faucibus mattis lorem. Donec vehicula, leo ut auctor ullamcorper, 
                        diam tortor dignissim velit, ac iaculis libero lacus non diam. </p>
                </div>
            </div>
            <div className="testimonial">
                <img className="reviewer-img" src={reviewer3} alt="greek salad"/>
                <div className="name-rating">
                    <p className="reviewer-name">Alvin C</p>
                    <p className="reviewer-rating">5/5</p>
                </div>
                <div className="review-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa massa, 
                        semper sed enim at, faucibus mattis lorem. Donec vehicula, leo ut auctor ullamcorper, 
                        diam tortor dignissim velit, ac iaculis libero lacus non diam. </p>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Testimonials
import React from 'react';
import restaurantfood from '../assets/restauranfood.jpg';

const Description = () => {
  return (
    <>
      <div className="restaurant-desc-parent">
            <div className="restaurant-desc">
                <p className="title desc-title">Little Lemon</p>
                <p className="subtitle desc-subtitle">Chicago</p>
                <p className="desc-text desc">We are a family owned Mediterranean restaurant, 
                    focused on traditional recipes served with a modern twist.</p>
            </div>
            <img className="desc-img" src={restaurantfood} alt="Little Lemon Restaurant"/>
        </div>
    </>
  )
}

export default Description
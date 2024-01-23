import React, { Component } from 'react';
import './List.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed:4000,
        cssEase: "linear"
    };
    return (
        <div>
            <div>
                <Slider {...settings}>
                    <div className='card'>
                        <img src="/images/photo1.png" alt="" className='w-100' />
                    </div>
                    <div className='card'>
                        <img src="/images/photo2.png" alt="" className='w-100' />
                    </div>
                    <div className='card'>
                        <img src="/images/photo3.jpg" alt="" className='w-100' />
                    </div>
                    <div className='card'>
                        <img src="/images/photo4.jpg" alt="" className='w-100' />
                    </div>

                </Slider>
            </div>
        </div>
    );
};

export default Home;
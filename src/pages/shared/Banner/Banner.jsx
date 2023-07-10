import React from 'react';
import bannerImg from '../../../assets/banner/banner.png'

const Banner = () => {
    return (
        <div className='container'>
            <div>
                <img className='w-100' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;
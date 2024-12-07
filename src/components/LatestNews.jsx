import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex gap-2 items-center bg-base-200 p-2'>
            <p className='bg-[#D72050] text-base-200 px-3 py-1 '>Latest</p>
            <Marquee pauseOnHover={ true} speed={60} className='space-x-10'>
                <Link to="/news">
                Embark on a journey of a lifetime with Eco-Adventure Experiences, where nature meets adventure! Discover breathtaking mountain treks, serene ocean dives, thrilling wildlife safaris, and tranquil forest expeditions</Link>
                
               
            </Marquee>
        </div>
    );
};

export default LatestNews;
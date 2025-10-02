import React from 'react';

import './Banner.css';
import element1 from '../../assets/vector1.png';
import element2 from '../../assets/vector2.png';

const Banner = ({ taskProgressCount, resolvedCount }) => {
    return (
        <div className='banner'>
            <div className='px-3 lg:px-11 2xl:px-20 pt-10 pb-4 lg:pt-20 lg:pb-14'>
                <div className='flex flex-wrap -mx-3'>
                    <div className='w-full md:w-6/12 px-3 mb-6'>
                        <div className='in-progress-linear-gradient text-center rounded-lg px-10 py-10 lg:py-16 relative overflow-hidden'>
                            <h2 className='text-2xl font-normal mb-4 text-white'>In-Progress</h2>
                            <h1 className='text-5xl lg:text-6xl font-semibold text-white'>{taskProgressCount}</h1>

                            {/* Banner Elements */}
                            <img className='absolute top-0 left-0 w-[62%] lg:w-auto' src={element1} alt="" />
                            <img className='absolute top-0 right-0 w-[62%] lg:w-auto' src={element2} alt="" />
                        </div>
                    </div>
                    <div className='w-full md:w-6/12 px-3 mb-6'>
                        <div className='resolved-linear-gradient text-center rounded-lg px-10 py-10 lg:py-16 relative overflow-hidden'>
                            <h2 className='text-2xl font-normal mb-4 text-white'>Resolved</h2>
                            <h1 className='text-5xl lg:text-6xl font-semibold text-white'>{resolvedCount}</h1>

                            {/* Banner Elements */}
                            <img className='absolute top-0 left-0 w-[62%] lg:w-auto' src={element1} alt="" />
                            <img className='absolute top-0 right-0 w-[62%] lg:w-auto' src={element2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
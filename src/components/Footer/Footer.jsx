import React from 'react';

import './Footer.css';
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className='bg-black'>
            <div className='px-3 lg:px-11 2xl:px-20 py-12 lg:py-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-10 2xl:gap-20'>
                    <div>
                        <h1 className='text-2xl font-bold mb-4 text-white'>
                            <a className='hover:opacity-65 duration-300' href="#" title='CS — Ticket System'>CS — Ticket System</a>
                        </h1>
                        <p className='text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div>
                        <h2 className='text-xl font-medium text-white mb-4'>Company</h2>
                        <ul className='text-gray-400 [&_a]:mb-4 [&_a]:inline-block [&_a]:hover:text-[#713AE7] [&_a]:duration-300'>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Our Mission</a>
                            </li>
                            <li>
                                <a href="#">Contact Saled</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-xl font-medium text-white mb-4'>Services</h2>
                        <ul className='text-gray-400 [&_a]:mb-4 [&_a]:inline-block [&_a]:hover:text-[#713AE7] [&_a]:duration-300'>
                            <li>
                                <a href="#">Products & Services</a>
                            </li>
                            <li>
                                <a href="#">Customer Stories</a>
                            </li>
                            <li>
                                <a href="#">Download Apps</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-xl font-medium text-white mb-4'>Information</h2>
                        <ul className='text-gray-400 [&_a]:mb-4 [&_a]:inline-block [&_a]:hover:text-[#713AE7] [&_a]:duration-300'>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="#">Join Us</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-xl font-medium text-white mb-4'>Social Links</h2>
                        <ul className='text-gray-400 [&_a]:mb-4 [&_a]:inline-block [&_a]:hover:text-[#713AE7] [&_a]:duration-300'>
                            <li>
                                <a href="#"><span className='text-sm mr-2 inline-flex bg-white text-black w-6 h-6 justify-center items-center rounded-full' ><FaXTwitter /></span> @CS — Ticket System</a>
                            </li>
                            <li>
                                <a href="#"><span className='text-sm mr-2 inline-flex bg-white text-black w-6 h-6 justify-center items-center rounded-full' ><FaLinkedinIn /></span> @CS — Ticket System</a>
                            </li>
                            <li>
                                <a href="#"><span className='text-sm mr-2 inline-flex bg-white text-black w-6 h-6 justify-center items-center rounded-full' ><FaFacebookF /></span> @CS — Ticket System</a>
                            </li>
                            <li>
                                <a href="#"><span className='text-sm mr-2 inline-flex bg-white text-black w-6 h-6 justify-center items-center rounded-full' ><MdEmail /></span> support@cst.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='px-3 lg:px-11 2xl:px-20'>
                <div className='text-[#FAFAFA] text-center border-t border-gray-900 py-7'>
                    <p>&copy; 2025 <a href="#">CS — Ticket System</a>. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
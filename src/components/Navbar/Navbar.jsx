import React from 'react';
import './Navbar.css';
import { FiPlus } from 'react-icons/fi';

const Navbar = () => {
    return (
        <div>
            <div className='navbar bg-white border-b border-[#E9E9E9] px-3 lg:px-11 2xl:px-20 py-3'>
                <div className='navbar-start flex-1'>
                    <div className='dropdown'>
                        <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
                            <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'> <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'>
                            <li>
                                <a href='#'>Home</a>
                            </li>
                            <li>
                                <a href="#">FAQ</a>
                            </li>
                            <li>
                                <a href="#">Changelog</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Download</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                            <li>
                                <a className='btn text-white btn-linear-gradient border-0 mt-2'><FiPlus /> New Ticket</a>
                            </li>
                        </ul>
                    </div>
                    {/* Navbar Logo */}
                    <a href='#' className='text-xl font-bold hover:opacity-65 duration-300' title='CS — Ticket System'>CS — Ticket System</a>
                </div>

                {/* Nvabar End Menu */}
                <div className='navbar-end hidden lg:flex'>
                    <ul className='menu menu-horizontal px-1'>
                        <li>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                        <li>
                            <a href="#">Changelog</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Download</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                    <a className='btn text-white btn-linear-gradient border-0'><FiPlus /> New Ticket</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
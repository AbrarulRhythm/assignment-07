import React from 'react';

import { toast } from 'react-toastify';
import { GoCalendar } from 'react-icons/go';

const CustomerTicket = ({ ticket, taskStatus }) => {

    const { title, description, customer, priority, status, createdAt } = ticket;

    const handleTask = () => {
        toast('In Progress!');
        taskStatus(ticket);
    }

    return (
        <div className='w-full md:w-6/12 px-3 mb-6'>
            <div onClick={handleTask} className='rounded-sm shadow-lg p-4 h-full cursor-pointer'>
                <div className='flex justify-between items-center mb-3'>
                    <h4 className='text-lg font-medium'>{title}</h4>
                    <div className={`text-base py-1 px-3 rounded-4xl flex items-center 
                            ${status === 'Open' && 'text-green-700 bg-green-400'}
                            ${status === 'In-Progress' && 'text-yellow-700 bg-yellow-400'}
                        `}>
                        <span className={`mr-1.5 w-[16px] h-[16px] block rounded-full 
                                ${status === 'Open' && 'bg-green-700'}
                                ${status === 'In-Progress' && 'bg-yellow-700'}
                            `}></span> {status}
                    </div>
                </div>
                <p className='text-base text-gray-500 mb-4'>{description}</p>
                <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center'>
                    <div className='flex items-center mb-2 lg:mb-0'>
                        <span className='text-sm font-medium text-gray-500 mr-4'>#1001</span>
                        <span className={`text-lg font-medium 
                                ${priority === 'HIGH PRIORITY' && 'text-red-500'}
                                ${priority === 'MEDIUM PRIORITY' && 'text-yellow-500'}
                                ${priority === 'LOW PRIORITY' && 'text-green-500'}
                            `}>{priority}</span>
                    </div>
                    <div className='flex items-center'>
                        <span className='text-ms font-normal text-gray-500 mr-4'>{customer}</span>
                        <div className='text-gray-500 flex items-center'><span className='text-lg mr-2'><GoCalendar /></span> {createdAt}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerTicket;
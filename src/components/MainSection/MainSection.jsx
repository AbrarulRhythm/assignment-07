import React, { use, useState } from 'react';

import './MainSection.css';
import CustomerTickets from '../CustomerTickets/CustomerTickets';
import AllTaskStatus from '../AllTaskStatus/AllTaskStatus';
import AllResolvedTask from '../AllresolvedTask/AllresolvedTask';

const MainSection = ({ customerTicketsPromise, taskStatus, inProgressTask, completeTask, resolvedTaskData }) => {

    const customerTickets = use(customerTicketsPromise);
    const [tickets, setTickets] = useState(customerTickets);

    const handleResolved = (resolvedTask) => {
        const filterResolvedTask = tickets.filter(ticket => ticket.id !== resolvedTask.id);
        setTickets(filterResolvedTask);
    }

    return (
        <div className='main-section'>
            <div className='px-3 lg:px-11 2xl:px-20 pb-4 lg:pb-14'>
                <div className='flex flex-wrap -mx-3 lg:-mx-4'>
                    <div className='w-full lg:w-9/12 px-3 lg:px-4'>
                        <h1 className='text-2xl font-semibold mb-4'>Customer Tickets</h1>

                        <CustomerTickets
                            taskStatus={taskStatus}
                            tickets={tickets}
                        ></CustomerTickets>
                    </div>
                    <div className='w-full lg:w-3/12 px-3 lg:px-4'>
                        <h1 className='text-2xl font-semibold mb-4'>Task Status</h1>
                        <AllTaskStatus
                            handleResolved={handleResolved}
                            completeTask={completeTask}
                            inProgressTask={inProgressTask}
                        ></AllTaskStatus>

                        <h1 className='text-2xl font-semibold mb-4'>Resolved Task</h1>
                        <AllResolvedTask
                            resolvedTaskData={resolvedTaskData}
                        ></AllResolvedTask>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainSection;
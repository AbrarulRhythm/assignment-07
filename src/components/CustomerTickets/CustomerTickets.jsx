import React from 'react';

import './CustomerTickets.css';
import CustomerTicket from '../CustomerTicket/CustomerTicket';

const CustomerTickets = ({ tickets, taskStatus }) => {

    return (
        <div className='flex flex-wrap -mx-3'>
            {
                tickets.map((ticket) => {
                    return (
                        <CustomerTicket
                            taskStatus={taskStatus}
                            key={ticket.id}
                            ticket={ticket}
                        ></CustomerTicket>
                    )
                })
            }
        </div>
    );
};

export default CustomerTickets;
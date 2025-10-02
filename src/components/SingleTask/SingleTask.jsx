import React from 'react';

import { toast } from 'react-toastify';

const SingleTask = ({ task, completeTask, handleResolved }) => {

    const handleCompleteTask = () => {
        toast('Completed!');
        completeTask(task);
        handleResolved(task);
    }

    return (
        <div className='rounded-sm bg-white shadow p-4 mb-4'>
            <h2 className='text-lg font-medium mb-4'>{task.title}</h2>
            <button onClick={handleCompleteTask} className='border-0 text-base font-medium text-white bg-green-600 w-full py-3 rounded-sm cursor-pointer hover:bg-green-700 duration-300'>Complete</button>
        </div>
    );
};

export default SingleTask;
import React from 'react';

import SingleTask from '../SingleTask/SingleTask';

const AllTaskStatus = ({ inProgressTask, completeTask, handleResolved }) => {

    return (
        <div className='tark-progress-wrap mb-10'>
            {
                inProgressTask.length < 1 ?
                    <h5 className='text-base text-gray-500 font-normal'>Select a ticket to add to Task Status</h5> :
                    inProgressTask.map((task) => {
                        return (
                            <SingleTask
                                handleResolved={handleResolved}
                                completeTask={completeTask}
                                key={task.id}
                                task={task}
                            ></SingleTask>
                        )
                    })
            }
        </div>
    );
};

export default AllTaskStatus;
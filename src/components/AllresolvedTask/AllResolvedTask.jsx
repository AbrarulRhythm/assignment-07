import React from 'react';
import SingleResolvedTask from '../SingleResolvedTask/SingleResolvedTask';

const AllResolvedTask = ({ resolvedTaskData }) => {
    return (
        <div className='resolved-task-wrapper mb-10'>
            {
                resolvedTaskData.length < 1 ?
                    <h5 className='text-base text-gray-500 font-normal'>No resolved tasks yet.</h5> :
                    resolvedTaskData.map((resolvedTask) => {
                        return (
                            <SingleResolvedTask
                                key={resolvedTask.id}
                                resolvedTask={resolvedTask}
                            ></SingleResolvedTask>
                        )
                    })
            }
        </div>
    );
};

export default AllResolvedTask;
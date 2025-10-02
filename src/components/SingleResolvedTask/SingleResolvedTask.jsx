import React from 'react';

const SingleResolvedTask = ({ resolvedTask }) => {
    return (
        <div className='rounded-sm py-5 px-4 bg-[#E0E7FF] mb-4'>
            <h4 className='text-lg font-medium'>{resolvedTask.title}</h4>
        </div>
    );
};

export default SingleResolvedTask;
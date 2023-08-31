import React from 'react';

function RightSide({ children }) {
    return (
        <div className="flex flex-col w-full h-full">
            {children}
        </div>
    );
}

export default RightSide;

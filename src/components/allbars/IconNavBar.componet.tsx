import React from 'react';

const IconNavBar = () => {
    return (
      <div className="flex space-x-6 overflow-x-auto py-4 px-8 border-b border-gray-300">
        <button className="text-center">
          <div className="flex flex-col items-center">
            <span className="text-lg">🏠</span>
            <span className="text-sm">Icons</span>
          </div>
        </button>
        <button className="text-center">
          <div className="flex flex-col items-center">
            <span className="text-lg">🛏️</span>
            <span className="text-sm">Rooms</span>
          </div>
        </button>
        <button className="text-center">
          <div className="flex flex-col items-center">
            <span className="text-lg">🏞️</span>
            <span className="text-sm">Countryside</span>
          </div>
        </button>
        <button className="text-center">
          <div className="flex flex-col items-center">
            <span className="text-lg">😲</span>
            <span className="text-sm">OMG!</span>
          </div>
        </button>
        <button className="text-center">
          <div className="flex flex-col items-center">
            <span className="text-lg">🏖️</span>
            <span className="text-sm">Beachfront</span>
          </div>
        </button>
        {/* Add more icons as needed */}
      </div>
    );
};

export default IconNavBar;
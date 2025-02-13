import React from 'react';

const Display = ({ value }) => {
  return (
    <div className="p-4 m-2 bg-gray-200 text-right rounded">
      {value}
    </div>
  );
};

export default Display;
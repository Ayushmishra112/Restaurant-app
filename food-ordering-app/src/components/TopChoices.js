import React, { useState, useEffect } from 'react';

const TopChoices = ({ choice, onSelectChoice }) => {
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    const fetchLabels = async () => {
      try {
        const response = await fetch("https://backend-kyst.onrender.com/api/tags");
        const data = await response.json();
        setLabels(data);
      } catch (error) {
        console.error("Error fetching labels:", error);
      }
    };

    fetchLabels();
  }, []);

  return (
    <div className="w-full p-4 border-b border-gray-500">
      <div className="border-b-4 border-gray-300">
        <h1 className="text-5xl font-bold py-2 text-sky-600 mb-1 tracking-wide drop-shadow-2xl">{choice}</h1>
      </div>
      <div className="flex mt-3 mb-1 flex-wrap gap-3 space-x-6">
        {labels.map((item) => (
          <button
            key={item._id} 
            onClick={() => onSelectChoice(item.label)}
            className="border border-slate-500 text-black items-center my-1 px-6 py-2 rounded-3xl shadow-md duration-300 hover:bg-red-500 hover:text-white hover:border-opacity-0 hover:cursor-pointer"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TopChoices;

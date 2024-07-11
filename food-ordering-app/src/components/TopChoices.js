import React from 'react';

const TopChoices = ({ choice }) => {
  return (
    <div className="w-full p-4 border-b border-gray-500">
      <div className="border-b-4 border-gray-300">
        <h1 className="text-5xl font-bold py-2 text-sky-600 mb-1 tracking-wide drop-shadow-2xl">{choice}</h1>
      </div>
      <div className="flex mt-3 mb-1 flex-wrap gap-3 space-x-6">
        {['All', 'Veg', 'Non-veg', 'Thai', 'Chinese', 'Indian', 'Mexican', 'Continental', 'Italian', 'French', 'Algerian', 'Japanese'].map((item) => (
          <button
            key={item}
            className="border border-slate-500 text-black items-center my-1 px-6 py-2 rounded-3xl shadow-md duration-300 hover:bg-red-500 hover:text-white hover:border-opacity-0 hover:cursor-pointer"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TopChoices;

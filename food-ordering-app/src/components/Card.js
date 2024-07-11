import React from 'react'
import nveg1 from "../assets/Non_veg_chicken_tikka_masala_.jpg";

const card = () => {
  return (
    <div className="flex w-full max-w-[calc(100vw-20rem)] p-4 border-t border-gray-300">
      <div className="px-2">
        <img
          className="object-contain h-28 w-38 rounded-2xl border-2 border-stone-200 drop-shadow-md hover:drop-shadow-2xl"
          src={nveg1}
          alt="Chicken Tikka Masala"
        />
      </div>
      <div className="flex flex-col mx-4 my-2 w-96">
        <div className="text-gray-600 mb-2 w-full">
          This is a delicious Chicken Tikka Masala made with marinated chicken
          pieces, cooked in a creamy tomato sauce, and seasoned with aromatic
          spices.
        </div> 
      </div>
      <div className="flex-col-reverse justify-between items-center">
          <div className="font-semibold text-xl font-sans text-red-500 mb-2">
            Chicken Tikka Masala
          </div>
          <button className="border-2 border-black mx-16 my-4 px-4 py-2 rounded-md hover:bg-gray-200">
            Order Now
          </button>
        </div>
    </div>
  )
}

export default card
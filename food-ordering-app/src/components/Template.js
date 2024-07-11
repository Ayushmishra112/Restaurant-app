import React, { useState, useEffect, useContext } from "react";
import { OrderContext } from "./OrderContext";
import toast from "react-hot-toast";

const Template = () => {
  const [meals, setMeals] = useState([]);
  const [labels, setLabels] = useState([]);
  const { addOrder, addDrinkOrder } = useContext(OrderContext);
  const [selectedDrinks, setSelectedDrinks] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesLoaded, setImagesLoaded] = useState(false); // State to track image loading
  const mealsPerPage = 3;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mealsResponse = await fetch("http://localhost:8000/api/meals");
        const mealsData = await mealsResponse.json();
        setMeals(mealsData);

        const tagsResponse = await fetch("http://localhost:8000/api/tags");
        const tagsData = await tagsResponse.json();
        setLabels(tagsData);

        // Simulate image loading with a delay
        setTimeout(() => {
          setImagesLoaded(true);
        }, 2000); // Adjust delay time as needed
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDrinkClick = (mealId, drink) => {
    setSelectedDrinks((prev) => ({
      ...prev,
      [mealId]: drink,
    }));
  };

  const handleDrinkOrderClick = (mealId) => {
    if (selectedDrinks[mealId]) {
      addDrinkOrder(mealId, selectedDrinks[mealId]);
      setSelectedDrinks((prev) => ({
        ...prev,
        [mealId]: null,
      }));
    }
  };

  // Pagination logic
  const indexOfLastMeal = currentPage * mealsPerPage;
  const indexOfFirstMeal = indexOfLastMeal - mealsPerPage;
  const currentMeals = meals.slice(indexOfFirstMeal, indexOfLastMeal);

  const handleNextPage = () => {
    if (indexOfLastMeal >= meals.length) {
      toast.error("No more meals to display.");
    } else {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage === 1) {
      toast.error("You are on the first page.");
    } else {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  if (!imagesLoaded) {
    return (
      <div className="flex justify-center items-center h-screen">
        <svg
          className="animate-spin h-10 w-10 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <span className="ml-2 text-xl">Loading content...</span>
      </div>
    );
  }

  return (
    <div className="w-full">
      {currentMeals.map((meal) => (
        <div
          key={meal.id}
          className="flex flex-wrap md:flex-nowrap w-full p-2 border-t border-gray-300"
        >
          <div className="w-full md:w-1/4 p-2">
            <img
              className={`object-cover h-40 w-full rounded-2xl border-2 ${
                selectedDrinks[meal.id] ? "border-blue-500" : "border-stone-200"
              } drop-shadow-md hover:drop-shadow-2xl`}
              src={meal.img}
              alt={meal.title}
            />
          </div>
          <div className="w-full md:w-2/4 p-2 flex flex-col justify-between">
            <div className="font-semibold text-xl font-sans text-red-500 mb-2">
              {meal.title}
            </div>
            <div className="text-gray-600 mb-2">{meal.starter}</div>
            <div className="flex flex-wrap mb-2">
              {meal.drinks.map((drink) => (
                <div
                  key={drink.id}
                  className="w-1/4 my-4 p-2 relative group"
                  onClick={() => handleDrinkClick(meal.id, drink)}
                >
                  <img
                    className={`object-cover h-24 w-full rounded-2xl border-2 ${
                      selectedDrinks[meal.id]?.id === drink.id
                        ? "border-blue-500"
                        : "border-stone-200"
                    } drop-shadow-md group-hover:drop-shadow-2xl`}
                    src={drink.img}
                    alt={drink.title}
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 text-white text-center p-2 rounded-2xl transition-opacity duration-300">
                    <div className="text-sm font-semibold">{drink.title}</div>
                    <div className="text-sm">₹{drink.price.toFixed(2)}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex space-x-5">
              <button
                className="border-2 border-black px-4 py-2 rounded-md hover:bg-red-500 hover:text-white hover:cursor-pointer hover:border-0"
                onClick={() => addOrder(meal)}
              >
                Order Now
              </button>
              {selectedDrinks[meal.id] && (
                <button
                  className="border-2 border-black px-4 py-2 rounded-md hover:bg-red-500 hover:text-white hover:cursor-pointer hover:border-0"
                  onClick={() => handleDrinkOrderClick(meal.id)}
                >
                  Order Drink
                </button>
              )}
            </div>
          </div>
          <div className="w-full md:w-1/4 p-2 flex flex-col justify-between items-end">
            <div className="mt-auto">
              <span className="text-gray-700">${meal.price.toFixed(2)}</span>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-between p-4">
        <button
          onClick={handlePreviousPage}
          className="border-2 border-black px-4 py-2 rounded-md hover:bg-gray-200"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          className="border-2 border-black px-4 py-2 rounded-md hover:bg-gray-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Template;

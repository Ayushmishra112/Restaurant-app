import React, { useState, useContext, useEffect } from "react";
import { IoAddOutline } from "react-icons/io5";
import { OrderContext } from './OrderContext';
import '../assets/checkmark.jpg';

const RightSidebar = () => {
  const [showInput, setShowInput] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const { orders, drinkOrders, clearOrders } = useContext(OrderContext);
  const [storedOrders, setStoredOrders] = useState([]);
  const [showOrders, setShowOrders] = useState(false);

  const handleAddClick = () => {
    setShowInput(true);
  };

  const handleInputChange = (event) => {
    setCustomerName(event.target.value);
  };

  const handleInputBlur = () => {
    if (customerName.trim() === "") {
      setShowInput(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setShowInput(false);
    }
  };

  const handleOrderNowClick = () => {
    const newOrder = {
      customerName: customerName || "Customer 1",
      mealOrders: [...orders],
      drinkOrders: [...drinkOrders],
    };
    setStoredOrders((prevOrders) => [...prevOrders, newOrder]);
   
    setCustomerName("");
    
    clearOrders();
   
    setTimeout(() => {
      setShowOrders(false);
    }, 3000); 
  };

  const handleOrdersButtonClick = () => {
    setShowOrders(!showOrders);
   
    clearTimeout();
  };

  return (
    <div className="w-[25%] shadow-xl shadow-blue-gray-900/5">
      <div className="flex justify-end w-full p-4 mx-2">
        <button
          onClick={handleOrdersButtonClick}
          className="border-2 border-blue-400 px-3 py-2 my-2 text-white font-semibold tracking-widest text-xl rounded-xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
        >
          Orders
        </button>
      </div>
      <div className="mx-4 border-t-4 border-gray-200">
        <div className="flex justify-start">
          <div className="text-xl text-blue-500 font-medium tracking-wide p-2 w-full border-b-2 border-blue-500">
            Meal plan
          </div>
        </div>
        <div className="p-2">
          <div className="flex items-center text-lg font-semibold">
            {customerName || "Customer 1"}
            <IoAddOutline className="ml-2 cursor-pointer" onClick={handleAddClick} />
          </div>
          {showInput && (
            <input
              type="text"
              value={customerName}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onKeyPress={handleKeyPress}
              className="border-2 border-gray-300 mt-2 px-2 py-1 w-full"
              placeholder="Enter customer name"
            />
          )}
          {!showOrders && (
            <div className="text-sm mt-4">
              Order Details:
              <ul className="list-disc ml-5">
                {orders.map((order, index) => (
                  <li key={index}>
                    {order.count} x {order.title}
                  </li>
                ))}
              </ul>
              <div className="mt-4">Drinks:</div>
              <ul className="list-disc ml-5">
                {drinkOrders.map((drinkOrder, i) => (
                  <li key={i}>
                    {drinkOrder.count} x {drinkOrder.drink.title} - ${drinkOrder.drink.price.toFixed(2)}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      {showOrders && (
        <div className="mx-4 mt-4 border-t-4 border-gray-200">
          <div className="p-2">
            <div className="text-xl text-blue-500 font-medium tracking-wide p-2 w-full border-b-2 border-blue-500">
              Orders Placed
            </div>
            <div className="text-sm mt-4">
              {storedOrders.map((order, index) => (
                <div key={index} className="mt-4 bg-gray-100 p-2 rounded-md">
                  <div className="font-bold">{order.customerName}</div>
                  <ul className="list-disc ml-5">
                    {order.mealOrders.map((mealOrder, idx) => (
                      <li key={idx}>
                        {mealOrder.count} x {mealOrder.title}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2">Drinks:</div>
                  <ul className="list-disc ml-5">
                    {order.drinkOrders.map((drinkOrder, idx) => (
                      <li key={idx}>
                        {drinkOrder.count} x {drinkOrder.drink.title} - ₹{drinkOrder.drink.price.toFixed(2)}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="w-full">
        <button
          onClick={handleOrderNowClick}
          className="mx-6 my-4 px-16 py-4 flex justify-center border-2 border-opacity-5 border-rose-700 text-2xl text-white antialiased bg-red-500 shadow-lg shadow-red-600/50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-700 duration-300"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;

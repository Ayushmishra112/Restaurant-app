import React, { createContext, useState } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [drinkOrders, setDrinkOrders] = useState([]);

  const addOrder = (meal) => {
    setOrders(prevOrders => {
      const existingOrder = prevOrders.find(order => order.id === meal.id);
      if (existingOrder) {
        return prevOrders.map(order => 
          order.id === meal.id ? { ...order, count: order.count + 1 } : order
        );
      }
      return [...prevOrders, { ...meal, count: 1 }];
    });
  };

  const addDrinkOrder = (mealId, drink) => {
    setDrinkOrders(prevDrinkOrders => {
      const existingDrinkOrder = prevDrinkOrders.find(order => order.mealId === mealId && order.drink.id === drink.id);
      if (existingDrinkOrder) {
        return prevDrinkOrders.map(order =>
          order.mealId === mealId && order.drink.id === drink.id
            ? { ...order, count: order.count + 1 }
            : order
        );
      }
      return [...prevDrinkOrders, { mealId, drink, count: 1 }];
    });
  };
  const clearOrders = () => {
    setOrders([]);
    setDrinkOrders([]);
  };
  return (
    <OrderContext.Provider value={{ orders, drinkOrders, addOrder, addDrinkOrder, clearOrders }}>
      {children}
    </OrderContext.Provider>
  );
};

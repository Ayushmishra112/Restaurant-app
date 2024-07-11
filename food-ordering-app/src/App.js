import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { OrderProvider } from "./components/OrderContext";
import LeftSidebar from "./components/LeftSidebar";
import Feed from "./components/Feed";
import { Toaster } from "react-hot-toast";
import Home from "./components/Home"; 

function App() {
  const [choice, setChoice] = useState('Dine-in');

  return (
    <OrderProvider>
      <Router>
        <div className="flex h-screen">
          <LeftSidebar setChoice={setChoice} />
          <div className="flex-1 flex-col items-center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/feed" element={<Feed choice={choice} />} />
            </Routes>
            <Toaster position="top-right" reverseOrder={false} />
          </div>
        </div>
      </Router>
    </OrderProvider>
  );
}

export default App;

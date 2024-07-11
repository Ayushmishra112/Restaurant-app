import React, { useState } from "react";
import Template from "./Template";
import { Toaster } from "react-hot-toast";
import TopChoices from "./TopChoices";
import RightSidebar from "./RightSidebar";

const Feed = ({ choice }) => {
  const [selectedChoice, setSelectedChoice] = useState("All");

  return (
    <div className="flex">
      <div className="flex-1">
        <TopChoices choice={selectedChoice} onSelectChoice={setSelectedChoice} />
        <Template selectedChoice={selectedChoice} />
      </div>
      <RightSidebar />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Feed;

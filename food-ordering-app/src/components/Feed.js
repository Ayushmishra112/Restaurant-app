import React from "react";
import Template from "./Template";
import { Toaster } from "react-hot-toast";
import TopChoices from "./TopChoices";
import RightSidebar from "./RightSidebar";

const Feed = ({ choice }) => {
  return (
    <div className="flex">
      <div className="flex-1">
        <TopChoices choice={choice} />
        <Template />
      </div>
      <RightSidebar />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Feed;

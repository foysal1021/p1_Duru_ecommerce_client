import React from "react";
import { RouterProvider } from "react-router-dom";
import route from "./Routes/Route";

const App = () => {
  return (
    <div className=" mx-auto max-w-[1340px]">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
};

export default App;

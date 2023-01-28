import React from "react";
import { Outlet } from "react-router-dom";
import DashboardManu from "../Dashboard/DashboardManu/DashboardManu";

const Dashboard = () => {
  return (
    <div className=" flex justify-between">
      <DashboardManu></DashboardManu>
      <div className=" ml-[300px] w-[1040px]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;

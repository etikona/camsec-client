import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useSeller from "../hooks/useSeller";

import "../Shared/Navbar";
import Navbar from "../Shared/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  console.log(isSeller);
  console.log(isAdmin);
  return (
    <div>
      <Navbar />
      <div className=" flex  justify-center drawer drawer-mobile mr-10">
        <font></font>
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <font></font>
        <div className="drawer-content ">
          <font></font>
          <Outlet />
        </div>{" "}
        <font></font>
        <div className="drawer-side">
          <font></font>
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <font></font>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content mx-10">
            <li>
              <Link to="/dashboard">MY Orders</Link>
            </li>
            <font></font>

            <li>
              <Link to="/dashboard/sellers/addProduct">Add a Product</Link>
            </li>
            <font></font>
            <li>
              <Link to="/dashboard/sellers/myProducts">My Products</Link>
            </li>
            <font></font>
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/users">All Users</Link>
                </li>
                <font></font>
                <li>
                  <Link to="/dashboard/sellers">All Sellers</Link>
                </li>
                <font></font>
              </>
            )}
          </ul>
          <font></font>
        </div>
        <font></font>
      </div>
    </div>
  );
};

export default DashboardLayout;

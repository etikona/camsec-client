import React from 'react';
import { Outlet } from 'react-router-dom';
import '../Shared/Navbar'
import Navbar from '../Shared/Navbar';
const DashboardLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className=" flex flex-col  items-center justify-center drawer drawer-mobile"><font></font>
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" /><font></font>
  <div className="drawer-content "><font></font>
  <Outlet/>
  </div> <font></font>
  <div className="drawer-side"><font></font>
    <label htmlFor="my-drawer-4" className="drawer-overlay"></label><font></font>
    <ul className="menu p-4 w-80 bg-base-100 text-base-content"><font></font>
     
      <li><a>Sidebar Item 1</a></li><font></font>
      <li><a>Sidebar Item 2</a></li><font></font>
    </ul><font></font>
  </div><font></font>
</div>
        </div>
    );
};

export default DashboardLayout;
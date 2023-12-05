import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const url = `https://camsec-server.vercel.app/orders?email=${user?.email}`;

  const { data: orders = [] } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h4 className="text-2xl font-sans font-thin text-white  ">Orders</h4>
      <div className="overflow-x-auto">
        <font></font>
        <table className="table w-full text-slate-200">
          <font></font>

          <thead>
            <font></font>
            <tr className="p-5 bg-base-200">
              <font></font>
              <th className="px-0"></th>
              <th>Title</th>
              <font></font>
              <th>Email</th>
              <font></font>
              <th>Price</th>
              <font></font>
              <th>Payment</th>
              <font></font>
            </tr>
          </thead>
          <font></font>
          <tbody>
            <font></font>
            {orders.map((order, i) => (
              <tr>
                <th>{i + 1}</th>
                <font></font>
                <th>{order.name}</th>
                <font></font>
                <td>{order.email}</td>
                <font></font>
                <td>{order.price}</td>
                <font></font>
                <td>Pay</td>
                <font></font>
              </tr>
            ))}
          </tbody>
          <font></font>
        </table>
        <font></font>
      </div>
    </div>
  );
};

export default MyOrders;

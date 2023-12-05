import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const Sellers = () => {
  const { data: sellers = [], refetch } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = await fetch("https://camsec-server.vercel.app/sellers");
      const data = await res.json();
      return data;
      refetch();
    },
  });
  const deleteUser = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Deleted user successfully");
          refetch();
        }
      });
  };

  return (
    <div>
      <h3 className="text-xl">All Sellers</h3>
      <div className="overflow-x-auto">
        <font></font>
        <table className="table w-full">
          <font></font>

          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((user, i) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.role !== "admin" && (
                    <button className="btn btn-xs  btn-info">verify</button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="btn btn-xs btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <font></font>
      </div>
    </div>
  );
};

export default Sellers;

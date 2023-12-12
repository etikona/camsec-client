import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const Users = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://camsec-server.vercel.app/users");
      const data = await res.json();
      return data;
    },
  });
  // Admin Creating
  const handleAdmin = (id) => {
    fetch(`https://camsec-server.vercel.app/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Admin created successfully!");
          refetch();
        } else {
          toast.error("you can't make any admin.It is a forbidden access");
          console.log(data);
        }
      });
  };

  // Delete User
  const deleteUser = (id) => {
    fetch(`https://camsec-server.vercel.app/users/${id}`, {
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
      <h3 className="text-xl ">All User</h3>
      <div className="overflow-x-auto ">
        <font></font>
        <table className="table table-xs table-pin-rows  text-white">
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
            {users.map((user, i) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handleAdmin(user._id)}
                      className="btn btn-xs  btn-info"
                    >
                      Admin
                    </button>
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

export default Users;

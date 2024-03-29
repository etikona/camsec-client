import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const BookingModal = ({ order }) => {
  const { name, resellPrice } = order;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.userName.defaultValue;
    const email = user.email;
    const price = form.price.defaultValue;
    const number = form.number.defaultValue;

    const location = form.location.defaultValue;
    const orders = {
      userName,
      email,
      price,
      number,
      location,
      name,
    };

    if (userName && email && price && number && location) {
      toast.success("Your order place successfully");
    }

    fetch("https://camsec-server.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast("Your order confirmed", {
            icon: "✔",
          });
          navigate("/dashboard");
        }

        form.reset();
      });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="my-modal-3"
        className="modal-toggle bg-sky-600"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form className="" onSubmit={handleOrder}>
            <input
              type="text"
              defaultValue={user.displayName}
              name="userName"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              readOnly
              defaultValue={user.email}
              name="email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              readOnly
              defaultValue={resellPrice}
              name="price"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="phone number"
              name="number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="meeting location"
              name="location"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              className="btn btn-outline w-full"
              value="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;

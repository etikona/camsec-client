import React from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Payment = ({ data }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(user);

  const handlePayment = (event, data) => {
    console.log(data);
    event.preventDefault();
    const form = event.target;
    const userName = form.userName.defaultValue;
    const email = user.email;
    const price = form.price.value;
    const number = form.number.value;

    const location = form.location.defaultValue;
  };

  const storePaymentInfo = (userName, email, price, number, location) => {
    const payment = { userName, email, price, number, location };
    fetch("http://localhost:5000/payment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    toast.success("Creating user Successfully");
  };
  return (
    <div>
      <h3>Please provide your information to proceed your payment</h3>
      <div>
        {/* <h3 className="text-lg font-bold">You Name</h3> */}
        <form className="w-80 gap-y-2" onSubmit={handlePayment}>
          <input
            type="text"
            // defaultValue={user.displayName}
            placeholder="Your Name"
            defaultValue={user.displayName}
            name="userName"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="email"
            // defaultValue={user.email}
            placeholder="Your Email"
            readOnly
            defaultValue={user.email}
            name="email"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            // readOnly
            name="price"
            placeholder="price"
            defaultValue="BDT"
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
          <input type="submit" className="btn btn-outline w-full" value="Pay" />
        </form>
      </div>
    </div>
  );
};

export default Payment;

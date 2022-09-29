import React from "react";
import Break from "../Break/Break";
import Profile from "../Profile/Profile";

const Cart = () => {
  return (
    <div className="border rounded-lg h-full static p-3">
      <Profile />
      <h2 className="text-xl mt-10">Add A Break</h2>
      <Break />
    </div>
  );
};

export default Cart;

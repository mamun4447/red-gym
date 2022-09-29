import React from "react";
import Break from "../Break/Break";
import Exercise from "../Exercise/Exercise";
import Profile from "../Profile/Profile";

const Cart = ({ stime, setTime }) => {
  return (
    <div className="border rounded-lg h-full static p-3">
      <Profile />
      <h2 className="text-xl mt-10">Add A Break</h2>
      <Break />
      <h2 className="text-xl mt-10">Exercise Details</h2>
      <Exercise stime={stime} setTime={setTime} />
    </div>
  );
};

export default Cart;

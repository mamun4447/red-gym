import React from "react";
import Break from "../Break/Break";
import Exercise from "../Exercise/Exercise";
import Profile from "../Profile/Profile";

const Cart = ({ stime }) => {
  // console.log(props);
  let breakTime;

  const getBreakTime = (seconds) => {
    breakTime = seconds;
  };
  return (
    <div className="border rounded-lg h-full sticky top-0 p-3">
      <Profile />
      <h2 className="text-xl mt-10">Add A Break</h2>
      <Break getBreakTime={getBreakTime} />
      <h2 className="text-xl mt-10">Exercise Details</h2>
      <Exercise stime={stime} />
    </div>
  );
};

export default Cart;

import React, { useState } from "react";
import Break from "../Break/Break";
import Exercise from "../Exercise/Exercise";
import Profile from "../Profile/Profile";

const Cart = ({ stime }) => {
  const [xtime, setTime] = useState();
  // console.log(props);

  const getBreakTime = (seconds) => {
    // console.log(seconds);
    localStorage.setItem("breakTime", seconds);
    const localData = localStorage.getItem("breakTime");
    setTime(JSON.parse(localData));
  };
  // console.log(xtime);

  return (
    <div className="border rounded-lg h-full p-3">
      <Profile />
      <h2 className="text-xl mt-10">Add A Break</h2>
      <Break getBreakTime={getBreakTime} />
      <h2 className="text-xl mt-10">Exercise Details</h2>
      <Exercise xtime={xtime} stime={stime} />
    </div>
  );
};;;;;

export default Cart;

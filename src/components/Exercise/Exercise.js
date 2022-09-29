import React from "react";

const Exercise = ({ stime }) => {
  // console.log(stime);
  let newTime = 0;
  stime.map((element) => (newTime += parseInt(element.time)));
  console.log(newTime);

  return (
    <div className="container">
      <div className="flex justify-between m-5 bg-slate-200 p-2 rounded">
        <h3 className="">Exercise time </h3>
        <p>
          <span>{newTime}</span> seconds
        </p>
      </div>
      <div className="flex justify-between m-5 bg-slate-200 p-2 rounded">
        <h3 className="">Break time</h3>
        <p>
          <span>{}</span> seconds
        </p>
      </div>
      <div className="text-center mt-10">
        <button type="" className="btn">
          Activity Completed
        </button>
      </div>
    </div>
  );
};;;;;

export default Exercise;

import React from "react";

const Exercise = ({ stime, setTime }) => {
  let times = 0;
  // console.log(stime);
  for (const time in stime) {
    times += parseInt(time);
  }

  return (
    <div className="container">
      <div className="flex justify-between m-5 bg-slate-200 p-2 rounded">
        <h3 className="">Exercise time </h3>
        <p>
          <span>{times}</span> seconds
        </p>
      </div>
      <div className="flex justify-between m-5 bg-slate-200 p-2 rounded">
        <h3 className="">Break time</h3>
        <p>
          <span>0</span> seconds
        </p>
      </div>
      <div className="text-center mt-10">
        <button type="" className="btn">
          Activity Completed
        </button>
      </div>
    </div>
  );
};

export default Exercise;

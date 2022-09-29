import React from "react";

const Break = ({ getBreakTime }) => {
  return (
    <div className="p-5 flex justify-around bg-slate-200 rounded">
      <button
        onClick={() => getBreakTime(20)}
        type=""
        className="bg-white p-1 rounded-full"
      >
        20
      </button>
      <button
        onClick={() => getBreakTime("30")}
        type=""
        className="bg-white p-1 rounded-full"
      >
        30s
      </button>
      <button
        onClick={() => getBreakTime("40")}
        type=""
        className="bg-white p-1 rounded-full"
      >
        40s
      </button>
      <button
        onClick={() => getBreakTime("50")}
        type=""
        className="bg-white p-1 rounded-full"
      >
        50s
      </button>
      <button
        onClick={() => getBreakTime("60")}
        type=""
        className="bg-white p-1 rounded-full"
      >
        60s
      </button>
    </div>
  );
};

export default Break;

import React from "react";

const SinglePlayer = ({ player }) => {
  const { name, img, time } = player;
  return (
    <div>
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure>
          <img className="h-80 w-full" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Time required: {time}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to list</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePlayer;

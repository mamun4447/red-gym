import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import SinglePlayer from "../singlePlayer/singlePlayer";

const Home = () => {
  const [players, setPlayers] = useState([]);
  const [stime, setTime] = useState([]);
  //   console.log(players);

  const url = `fakeDB.json`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  });
  return (
    <div>
      <h1 className="text-2xl mx-32 my-5">Select today’s exercise</h1>
      <div className="container grid grid-cols-4 gap-4 mx-auto">
        <div className="grid col-span-3 grid-cols-3 gap-2 ">
          {players.map((player) => (
            <SinglePlayer
              stime={stime}
              setTime={setTime}
              key={player.id}
              player={player}
            />
          ))}
        </div>
        <div className="sticky">
          <Cart stime={stime} setTime={setTime} />
        </div>
      </div>
    </div>
  );
};

export default Home;

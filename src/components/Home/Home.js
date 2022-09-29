import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import SinglePlayer from "../singlePlayer/singlePlayer";

const Home = () => {
  const [players, setPlayers] = useState([]);
  const [stime, setTime] = useState([]);
  // console.log(players);

  const handledSetTime = (player) => {
    // console.log(player);
    const newTimes = [...stime, player];
    setTime(newTimes);
  };

  useEffect(() => {
    fetch(`fakeDB.json`)
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl mx-32 my-5">Select todays exercise</h1>
      <div className="container grid grid-cols-1 lg:grid-cols-4 lg:gap-4 mx-auto">
        <div className="grid lg:col-span-3 lg:grid-cols-3 md:grid-cols-2 md:gap-2 lg:gap-2 ">
          {players.map((player) => (
            <SinglePlayer
              handledSetTime={handledSetTime}
              key={player.id}
              player={player}
            />
          ))}
        </div>
        <div className="h-full sticky top-10 md:mt-10 mt-10 lg:mt-0">
          <Cart stime={stime} />
        </div>
      </div>
    </div>
  );
};

export default Home;

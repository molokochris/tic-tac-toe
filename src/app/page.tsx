"use client";
import { useState } from "react";

export default function Home() {
  const [move, setMove] = useState(null);
  const [playerOne, setPlayerOne] = useState(true);
  const [myArray, setMyArray] = useState([
    { id: 0, play: null },
    {
      id: 1,
      play: null,
    },
    {
      id: 2,
      play: null,
    },
    {
      id: 3,
      play: null,
    },
    {
      id: 4,
      play: null,
    },
    {
      id: 5,
      play: null,
    },
    {
      id: 6,
      play: null,
    },
    {
      id: 7,
      play: null,
    },
    {
      id: 8,
      play: null,
    },
  ]);
  function playMove(id) {
    const updatedArray = myArray.map((box) => {
      if (box.id === id) {
        if (playerOne) {
          return { ...box, play: "X" }; // Update play property to "X"
        } else {
          return { ...box, play: "O" }; // Update play property to "O"
        }
      }
      return box; // Return unchanged box if id doesn't match
    });
    setMyArray(updatedArray);
    setPlayerOne(!playerOne); // Toggle playerOne state
    console.log(myArray);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="py-2 text-2xl">Player : {playerOne ? 1 : 2}</div>
      <div className="border border-red-400 rounded-sm w-[46em] h-[46em] flex items-center justify-evenly flex-wrap">
        {myArray.map(({ id, play }) => (
          <div
            key={id}
            className="w-1/3 h-1/3 border flex items-center justify-center"
            onClick={() => playMove(id)}
          >
            <div className="text-[12em] text-gray-500">
              {play === null ? "" : play === "X" ? "X" : "O"}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

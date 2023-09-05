import React, { useEffect, useState } from "react";
import axios from "axios";

import MemoryGameList from "./MemoryGameList";

const MemoryGameBoard = ({ startGame }) => {
  const [charNaruto, setCharNaruto] = useState([]);
  console.log(charNaruto);

  useEffect(() => {
    const getCharNaruto = async () => {
      try {
        const response = await axios.get(
          `https://www.narutodb.xyz/api/character?limit=4`
        );
        const char = response.data.characters;
        setCharNaruto(char);
      } catch (err) {
        console.log(err.message);
      }
    };
    getCharNaruto();
    return setCharNaruto([]);
  }, [startGame]);

  return (
    <React.Fragment>
      <div className="h-screen flex justify-center items-center">
        <div className="grid grid-cols-2 gap-y-2">
          <MemoryGameList charNaruto={charNaruto} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MemoryGameBoard;

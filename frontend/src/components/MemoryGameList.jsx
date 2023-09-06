import React from "react";
import Tilt from "react-parallax-tilt";

import "../styles/MemoryGameList.css";

const MemoryGameList = ({
  charNaruto,
  selectedCharId,
  setSelectedCharId,
  handleCurrentScore,
}) => {
  return (
    <React.Fragment>
      {charNaruto.map((char) => (
        <Tilt key={char.id}>
          <div
            className="flex justify-center items-center flex-col cursor-pointer"
            id="memoryGameList"
            onClick={() => {
              setSelectedCharId([...selectedCharId, char.id]);
              handleCurrentScore();
            }}
          >
            <img
              src={char.images[0]}
              alt={char.name}
              className="h-60 w-52 rounded-lg"
            />
            <h2 className="text-base tracking-wide mt-2 text-white">
              {char.name}
            </h2>
          </div>
        </Tilt>
      ))}
    </React.Fragment>
  );
};

export default MemoryGameList;

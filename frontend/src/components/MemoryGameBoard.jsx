import React, { useEffect, useState } from "react";
import _ from "underscore";
import axios from "axios";

import FailedModal from "./FailedModal";
import SuccessModal from "./SuccessModal";
import MemoryGameList from "./MemoryGameList";

import "../styles/MemoryGameBoard.css";

const MemoryGameBoard = ({
  startGame,
  setStartGame,
  bestScore,
  setBestScore,
}) => {
  const [level, setLevel] = useState(1);
  const [charNaruto, setCharNaruto] = useState([]);
  const [selectedCharId, setSelectedCharId] = useState([]);

  const [currentScore, setCurrentScore] = useState(0);

  const HandleBestScore = () => {
    currentScore > bestScore && setBestScore(currentScore);
  };

  useEffect(() => {
    const getCharNaruto = async () => {
      try {
        if (startGame) {
          const response =
            level > 1
              ? await axios.get(
                  `https://www.narutodb.xyz/api/character?page=${
                    level + 1
                  }&limit=${3 + (level - 1)}`
                )
              : await axios.get(
                  `https://www.narutodb.xyz/api/character?page=2&limit=3`
                );
          const char = response.data.characters;
          setCharNaruto(char);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    getCharNaruto();
    return setCharNaruto([]), setSelectedCharId([]);
  }, [startGame, level]);

  useEffect(() => {
    if (
      _.uniq(selectedCharId).length === selectedCharId.length &&
      selectedCharId.length > 0
    ) {
      setCurrentScore((prev) => prev + 1);
    }
  }, [selectedCharId]);

  const newCharReshuffle = _.shuffle(charNaruto);

  return (
    <React.Fragment>
      <div
        className="bg-slate-800 opacity-80 p-2 text-slate-200 text-base sm:text-lg font-medium tracking-wider text-center"
        id="memoryGameBoard"
      >
        <h4>Current Score : {currentScore}</h4>
        <h4>Best Score : {bestScore}</h4>
      </div>
      <div className="flex justify-center items-center">
        {_.uniq(selectedCharId).length !== selectedCharId.length ? (
          <FailedModal
            setLevel={setLevel}
            setStartGame={setStartGame}
            HandleBestScore={HandleBestScore}
          />
        ) : _.uniq(selectedCharId).length === selectedCharId.length &&
          selectedCharId.length === newCharReshuffle.length &&
          selectedCharId.length > 0 ? (
          <SuccessModal
            level={level}
            setLevel={setLevel}
            HandleBestScore={HandleBestScore}
          />
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 sm:p-2 sm:gap-2">
            <MemoryGameList
              charNaruto={newCharReshuffle}
              selectedCharId={selectedCharId}
              setSelectedCharId={setSelectedCharId}
            />
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default MemoryGameBoard;

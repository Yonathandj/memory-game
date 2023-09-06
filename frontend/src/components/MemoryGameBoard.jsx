import React, { useEffect, useState } from "react";
import _ from "underscore";
import axios from "axios";

import FailedModal from "./FailedModal";
import SuccessModal from "./SuccessModal";
import MemoryGameList from "./MemoryGameList";

const MemoryGameBoard = ({
  startGame,
  setStartGame,
  currentScore,
  setCurrentScore,
  bestScore,
  setBestScore,
}) => {
  const [charNaruto, setCharNaruto] = useState([]);
  const [selectedCharId, setSelectedCharId] = useState([]);
  const [level, setLevel] = useState(1);

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
    return setCharNaruto([]);
  }, [startGame, level]);

  const newCharReshuffle = _.shuffle(charNaruto);

  function handleCurrentScore() {
    _.uniq(selectedCharId).length === selectedCharId.length &&
      setCurrentScore(currentScore + 1);
  }
  return (
    <React.Fragment>
      <div className="absolute bg-slate-800 opacity-80 p-5 top-5 left-5 rounded-lg text-slate-200 text-lg font-semibold tracking-wider">
        <h4>Current Score: {currentScore}</h4>
        <h4>Best Score: {bestScore}</h4>
      </div>
      <div className="h-screen flex justify-center items-center">
        {_.uniq(selectedCharId).length !== selectedCharId.length ? (
          <FailedModal
            setLevel={setLevel}
            bestScore={bestScore}
            setBestScore={setBestScore}
            setStartGame={setStartGame}
            currentScore={currentScore}
            setCurrentScore={setCurrentScore}
          />
        ) : _.uniq(selectedCharId).length === selectedCharId.length &&
          selectedCharId.length === newCharReshuffle.length &&
          selectedCharId.length > 0 ? (
          <SuccessModal
            level={level}
            setLevel={setLevel}
            setSelectedCharId={setSelectedCharId}
          />
        ) : (
          <div className="grid grid-cols-3 gap-2">
            <MemoryGameList
              charNaruto={newCharReshuffle}
              selectedCharId={selectedCharId}
              setSelectedCharId={setSelectedCharId}
              handleCurrentScore={handleCurrentScore}
            />
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default MemoryGameBoard;

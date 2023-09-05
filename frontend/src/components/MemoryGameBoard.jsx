import React, { useEffect, useState } from "react";
import _ from "underscore";
import axios from "axios";

import FailedModal from "./FailedModal";
import SuccessModal from "./SuccessModal";
import MemoryGameList from "./MemoryGameList";

const MemoryGameBoard = ({ startGame }) => {
  const [charNaruto, setCharNaruto] = useState([]);
  const [selectedCharId, setSelectedCharId] = useState([]);
  console.log(selectedCharId);

  useEffect(() => {
    const getCharNaruto = async () => {
      try {
        const response = await axios.get(
          `https://www.narutodb.xyz/api/character?page=2&limit=6`
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

  const newCharReshuffle = _.shuffle(charNaruto);
  return (
    <React.Fragment>
      <div className="h-screen flex justify-center items-center">
        {_.uniq(selectedCharId).length !== selectedCharId.length ? (
          <FailedModal />
        ) : _.uniq(selectedCharId).length === selectedCharId.length &&
          selectedCharId.length === newCharReshuffle.length &&
          selectedCharId.length > 0 ? (
          <SuccessModal />
        ) : (
          <div className="grid grid-cols-3 gap-4">
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

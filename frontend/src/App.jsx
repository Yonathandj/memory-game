import React, { useState } from "react";
import backgroundVid from "../public/background-vid.mp4";
import StartGame from "./components/StartGame";
import MemoryGameBoard from "./components/MemoryGameBoard";

function App() {
  const [startGame, setStartGame] = useState(false);
  return (
    <React.Fragment>
      {startGame ? (
        <MemoryGameBoard startGame={startGame} />
      ) : (
        <StartGame setStartGame={setStartGame} />
      )}
      <video playsInline autoPlay muted loop poster="naruto.jpg">
        <source src={backgroundVid} type="video/mp4" />
      </video>
    </React.Fragment>
  );
}

export default App;

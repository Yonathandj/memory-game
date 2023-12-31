import React from "react";

import "../styles/StartGame.css";

const StartGame = ({ setStartGame }) => {
  return (
    <React.Fragment>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-slate-600 opacity-80">
        <div className="flex justify-center items-center h-screen">
          <section className="h-auto w-[460px] sm:w-[560px] sm:h-96 bg-orange-800 rounded-md flex flex-col justify-center">
            <div className="p-10" id="startGame">
              <h2 className="text-2xl sm:text-4xl text-center text-slate-100 font-semibold tracking-wide">
                Welcome To Naruto Memory Game
              </h2>
              <p className="text-sm sm:text-base text-center text-white mt-6 tracking-wide">
                In this game, you will be asked to choose character by character
                in the Naruto Anime. Each round, you cannot choose the character
                you have previously chosen and if that happens you will lose.
                Those are the rules for playing this game and have fun.
              </p>
            </div>
            <button
              onClick={() => setStartGame(true)}
              className="bg-slate-100 px-6 py-2 text-base rounded-lg mx-auto font-semibold active:bg-slate-900 active:text-slate-100 tracking-wide mb-6 sm:mb-0"
            >
              Start Game
            </button>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StartGame;

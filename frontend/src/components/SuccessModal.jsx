import React from "react";

const SuccessModal = ({ level, setLevel, HandleBestScore }) => {
  return (
    <React.Fragment>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-slate-600 opacity-80">
        <div className="flex justify-center items-center h-screen">
          <section className="w-[560px] h-96 bg-orange-800 rounded-md flex flex-col justify-center">
            <div className="p-10" id="startGame">
              <h2 className="text-4xl text-center text-slate-100 font-semibold tracking-wide">
                Your memory is awesome
              </h2>
              <p className="text-base text-center text-white mt-6 tracking-wide">
                You can remember and choose Naruto characters without double.
                You can proceed to the next level.
              </p>
            </div>
            <button
              className="bg-slate-100 px-6 py-2 text-base rounded-lg mx-auto font-semibold active:bg-slate-900 active:text-slate-100 tracking-wide"
              onClick={() => {
                setLevel(level + 1);
                HandleBestScore();
              }}
            >
              Continue
            </button>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SuccessModal;

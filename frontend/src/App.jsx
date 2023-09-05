import backgroundVid from "../public/background-vid.mp4";

function App() {
  return (
    <>
      <video playsInline autoPlay muted loop poster="naruto.jpg">
        <source src={backgroundVid} type="video/mp4" />
      </video>
    </>
  );
}

export default App;

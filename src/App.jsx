import Apple from "../public/apple.svg";
import AppleWatch from "../public/watches in Apple.png";
function App() {
  return (
    <>
      <div>
        <img src={Apple} className="logo" />
        <h1 className="AppleH1">Apple</h1>
        <h1 className="AppleH1">Watch</h1>
      </div>
      <img src={AppleWatch} className="Apple-Watch" />
    </>
  );
}

export default App;

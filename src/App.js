import "./App.css";
import Video from "./components/Video";

function App() {
  return (
    ///Block-Element-Modifier setup
    <div className="app">
      <div className="app__videos">
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;

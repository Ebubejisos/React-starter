import Header from "./components/Header";
import Game from "./components/Game";
import { useState } from "react";

function App() {
  const [playerScore, setplayerScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [time, setTime] = useState(30);

  return (
    <main className="main">
      <div className="container">
        <Header
          score={playerScore}
          bestScore={bestScore}
          gameTime={time}
          setGameTime={setTime}
        />
        <Game
          score={playerScore}
          bestScore={bestScore}
          setScore={setplayerScore}
          setBestScore={setBestScore}
          gameTime={time}
        />
      </div>
    </main>
  );
}

export default App;

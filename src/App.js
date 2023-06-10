import Header from "./components/Header";
import Game from "./components/Game";
import { useState } from "react";

function App() {
  const [playerScore, setplayerScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <main className="main">
      <div className="container">
        <Header score={playerScore} bestScore={bestScore} />
        <Game
          score={playerScore}
          bestScore={bestScore}
          setScore={setplayerScore}
          setBestScore={setBestScore}
        />
      </div>
    </main>
  );
}

export default App;

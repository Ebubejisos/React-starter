const Header = ({ score, bestScore, gameTime, setGameTime }) => {
  return (
    <header>
      <div className="heading">
        <div className="head-timer">
          <h1>Color Memory Game</h1>
          <div className="timer-select">
            <label htmlFor="number">Choose time</label>
            <input
              type="number"
              name="number"
              id="number"
              min={10}
              max={120}
              value={gameTime}
              onChange={(e) => setGameTime(e.target.value)}
            />
          </div>
        </div>
        <section>
          <h3>Score: {score}</h3>
          <h3 className="bestScore">Best score: {bestScore}</h3>
        </section>
      </div>
      <p>
        Get points by clicking on a color but don&#180;t click on any more than
        once and don&#180;t run out of time!
      </p>
    </header>
  );
};

export default Header;

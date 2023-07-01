const Congratulation = ({ setIsGameWon, handleClick }) => {
  return (
    <div id="overlay">
      <div className="win-message">
        <h1 className="text">Congratulations on Completing this round!!</h1>
        <p>Can you do it again??</p>

        <button
          type="button"
          onClick={() => {
            handleClick();
            setIsGameWon(false);
          }}
        >
          Restart Game
        </button>
      </div>
    </div>
  );
};

export default Congratulation;

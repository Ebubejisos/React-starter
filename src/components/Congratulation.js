const Congratulation = ({ setIsGameWon }) => {
  return (
    <div id="overlay">
      <h2 className="text">
        Congratulations on Completing this round, can you do it again???
        <button
          type="button"
          onClick={() => {
            setIsGameWon(false);
          }}
        >
          Restart Game
        </button>
      </h2>
    </div>
  );
};

export default Congratulation;

const Header = () => {
  return (
    <header>
      <div className="heading">
        <h1>Color Memory Game</h1>
        <section>
          <h3>Score: 0</h3>
          <h3 className="bestScore">Best score: 0</h3>
        </section>
      </div>
      <p>
        Get points by clicking on an image but don&#180;t click on any more than
        once!
      </p>
    </header>
  );
};

export default Header;

import { useState, useEffect } from "react";
import Card from "./Card";
import DavyDisplay from "./DavyDisplay";
import Congratulation from "./Congratulation";

const Game = ({ score, bestScore, setScore, setBestScore }) => {
  const [cards, setCards] = useState([
    { title: "Coral", hex: "#FF5733", clicked: false },
    { title: "Dodger Blue", hex: "#00ADEF", clicked: false },
    { title: "Purple", hex: "#9C27B0", clicked: false },
    { title: "Amber", hex: "#FFC107", clicked: false },
    { title: "Green", hex: "#4CAF50", clicked: false },
    { title: "Cerise", hex: "#E91E63", clicked: false },
    { title: "Light Blue", hex: "#03A9F4", clicked: false },
    { title: "Yellow", hex: "#FFEB3B", clicked: false },
    { title: "Lime Green", hex: "#8BC34A", clicked: false },
    { title: "Deep Purple", hex: "#673AB7", clicked: false },
    { title: "Orange", hex: "#FF9800", clicked: false },
    { title: "Teal", hex: "#009688", clicked: false },
    { title: "Orchid", hex: "#CC00FF", clicked: false },
    { title: "Cobalt", hex: "#4C4CFF", clicked: false },
    { title: "Ember", hex: "#FF9900", clicked: false },
    { title: "Serene", hex: "#1AABBC ", clicked: false },
  ]);
  const [isShuffled, setIsShuffled] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);
  const [missedColors, setMissedColors] = useState([]);
  const [gameStart, setGameStart] = useState(false);
  const [totalTime, setTotalTime] = useState(20);
  //stores props data received from App
  let playerScore = score;
  let playerBestScore = bestScore;
  //variables for dislaying game timer
  let minutes = Math.floor(totalTime / 60);
  let seconds = totalTime % 60;
  let stringySeconds = seconds < 10 ? "0" + seconds : seconds;
  //shuffle card on Game mount
  useEffect(() => {
    shuffle();
  }, []);
  useEffect(() => {
    const myInterval = setInterval(() => {
      let currentTime = totalTime;
      currentTime--;
      setTotalTime(currentTime);
    }, 1000);
    if (totalTime < 4) {
      clearInterval(myInterval);
      console.log("interval cleared");
    }
    return () => clearInterval(myInterval);
  });
  // starts game timer and runs when start game button is clicked
  function startGame() {
    setGameStart(true);
    let currentTime = totalTime;
    currentTime--;
    setTotalTime(currentTime);
    if (currentTime < 4) {
      console.log("less than 4seconds left");
    }
  }
  // runs each time a color is clicked and handles game logic
  const gameCheck = (bool, cardIndex) => {
    // checks if game has been initialized
    if (gameStart == false) {
      return;
    }
    //removes a component rendered when player loses
    isGameOver == true ? setIsGameOver(false) : "";
    // compares player's score with his best score and updates best score when necessary
    const bestScoreUpdater = () => {
      if (playerBestScore < playerScore) {
        playerBestScore = playerScore;
        setBestScore(playerBestScore);
      }
    };
    // checks if player has lost by clicking the same color
    if (bool == true) {
      const tempCard = cards.filter((card) => card.clicked == false);
      setMissedColors(tempCard);
      setIsGameOver(true);

      bestScoreUpdater();
      playerScore = 0;
      setScore(playerScore);
      setGameStart(false);
      restartGame();
      return;
    }
    // increases player's score if he clicks on an unclicked color
    playerScore++;
    setScore(playerScore);
    // checks if player has won the game
    const winCheck = () => {
      if (playerScore == 16) {
        setIsGameWon(true);
        bestScoreUpdater();
      } else {
        const newCards = cards;
        newCards[cardIndex].clicked = true;
        setCards(newCards);
        shuffle();
      }
    };
    winCheck();
  };

  function shuffle() {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    const newCards = cards;
    setCards(newCards);
    setIsShuffled(!isShuffled);
  }

  function restartGame() {
    playerScore = 0;
    setScore(playerScore);
    const initCards = cards;
    initCards.map((card) => (card.clicked = false));
    setCards(initCards);
  }

  return (
    <main>
      {isGameWon && (
        <Congratulation setIsGameWon={setIsGameWon} handleClick={restartGame} />
      )}
      {isGameOver && <DavyDisplay remainderColor={missedColors} />}
      <h2 className="timer">
        {minutes}:{stringySeconds}
      </h2>
      {
        <button type="button" onClick={() => startGame()}>
          Start Game
        </button>
      }
      <div className="game">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            hex={card.hex}
            handleClick={() => gameCheck(card.clicked, index)}
          />
        ))}
      </div>
    </main>
  );
};

export default Game;

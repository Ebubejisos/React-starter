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
    { title: "Mint", hex: "#66FF99", clicked: false },
    { title: "Cobalt", hex: "#4C4CFF", clicked: false },
    { title: "Ember", hex: "#FF9900", clicked: false },
    { title: "Serene", hex: "#1AABBC ", clicked: false },
  ]);
  const [isShuffled, setIsShuffled] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);
  const [remArray, setRemArray] = useState([]);

  useEffect(() => {
    shuffle();
  }, []);

  function gameCheck(bool, cardIndex) {
    setIsGameOver(false);
    if (bool == true) {
      setIsGameOver(true);
      const tempCard = cards.filter((card) => card.clicked == false);
      setRemArray(tempCard);

      if (bestScore < score) {
        setBestScore(score);
      }

      setScore(0);
      restartGame();
      return;
    }
    setScore((score) => score + 1);
    () => {
      if (score == 5) {
        setIsGameWon(true);
      }
    };
    const newCards = cards;
    newCards[cardIndex].clicked = true;
    setCards(newCards);
    shuffle();
  }

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
    const initCards = cards;
    initCards.map((card) => (card.clicked = false));
    setCards(initCards);
  }

  return (
    <main>
      {isGameWon && <Congratulation setIsGameWon={setIsGameWon} />}
      {isGameOver && <DavyDisplay remainderColor={remArray} />}
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

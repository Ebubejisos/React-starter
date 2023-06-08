import { useState, useEffect } from "react";
import Card from "./Card";

const Game = () => {
  const [cards, setCards] = useState([
    { title: "Coral", hex: "#FF5733" },
    { title: "Dodger Blue", hex: "#00ADEF" },
    { title: "Purple", hex: "#9C27B0" },
    { title: "Amber", hex: "#FFC107" },
    { title: "Green", hex: "#4CAF50" },
    { title: "Cerise", hex: "#E91E63" },
    { title: "Light Blue", hex: "#03A9F4" },
    { title: "Yellow", hex: "#FFEB3B" },
    { title: "Lime Green", hex: "#8BC34A" },
    { title: "Deep Purple", hex: "#673AB7" },
    { title: "Orange", hex: "#FF9800" },
    { title: "Teal", hex: "#009688" },
  ]);
  const [isShuffled, setIsShuffled] = useState(false);

  useEffect(() => {
    console.log("shuffled");
  }, [isShuffled]);

  function shuffle() {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    const newCards = cards;
    setCards(newCards);
    setIsShuffled(!isShuffled);
  }

  return (
    <div className="game">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          hex={card.hex}
          handleClick={shuffle}
        />
      ))}
    </div>
  );
};

export default Game;

import React, { useMemo, useState } from "react";
import useCard from "../../hooks/useCard";
import { Card } from "../../contexts/CardContext";
import useDeck from "../../hooks/useDeck";

const StudyCards = () => {
  const { cards, resetCards } = useCard();
  const { currentDeck, exitMode } = useDeck();
  const [showTerm, setShowTerm] = useState(true);
  const [index, setIndex] = useState(0);

  const currentCards: Card[] = useMemo(() => {
    return cards.filter((card) => card.deck_id === currentDeck?.deck_id);
  }, []);

  const prevCard = () => {
    setIndex((prevIndex) => {
      if (prevIndex - 1 < 0) return prevIndex;
      return prevIndex - 1;
    });
    setShowTerm(true);
  };

  const nextCard = () => {
    setIndex((prevIndex) => {
      if (prevIndex + 1 >= currentCards.length) return prevIndex;
      return prevIndex + 1;
    });
    setShowTerm(true);
  };

  const handleTerm = () => {
    setShowTerm((p) => !p);
  };

  function exitSession() {
    exitMode();
    resetCards();
  }

  return (
    <section className="studycards-container">
      <button className="btn btn-outline-light add-deck" onClick={exitSession}>
        Home
      </button>
      <>
        <article
          className="card bg-light text-black studycard-container"
          onClick={handleTerm}
        >
          <p>
            Card: {index + 1}/{currentCards.length}
          </p>
          {showTerm ? (
            <h2>{currentCards[index]?.term}</h2>
          ) : (
            <p>{currentCards[index]?.definition}</p>
          )}
        </article>
        <div className="studycards-buttons-container">
          <button
            className="studycards-button btn btn-outline-light"
            onClick={prevCard}
          >
            Prev
          </button>
          <button
            className="studycards-button btn btn-outline-light"
            onClick={nextCard}
          >
            Next
          </button>
        </div>
      </>
    </section>
  );
};

export default StudyCards;

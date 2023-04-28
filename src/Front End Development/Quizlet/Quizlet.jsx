import React from "react";
import Decks from "./Decks";
import EditFlashCards from "./EditFlashcards";
import StudyCards from "./StudyCards";
import Write from "./Write";
import "./Quizlet.css";

const Quizlet = () => {
  const [studySelected, setStudySelected] = React.useState(false);
  const [editSelected, setEditSelected] = React.useState(false);
  const [quizSelected, setQuizSelected] = React.useState(false);
  const [currentDeckId, setCurrentDeckId] = React.useState(null);
  const [decks, setDecks] = React.useState([
    {
      title: "Physics",
      description: "Kinetic & Potential Energy",
      cards: [
        {
          term: "Forms of Energy",
          definition: "chemical, electrical, mechanical",
        },
        {
          term: "Magnitude",
          definition:
            "The magnitude of the force is the number that represents the strength of the force",
        },
        {
          term: "Mass",
          definition: "A measure of how much matter is in an object",
        },
        {
          term: "Speed",
          definition: "The distance an object travels per unit of time",
        },
        {
          term: "Gravitational Potential Energy",
          definition:
            "Potential energy that depends on the height of an object above earth's surface",
        },
      ],
    },
    {
      title: "Thermodynamics",
      description: "The study of the flow of energy through system",
      cards: [
        {
          term: "Heat",
          definition: "Low quality form of energy",
        },
        {
          term: "Energy",
          definition:
            "Ability to do work or move matter. It cannot be felt or observed, expect for light or heat",
        },
        {
          term: "Thermodynamics",
          definition: "The study of the flow of energy through system",
        },
        {
          term: "First Law of Thermodynamics",
          definition: `States that energy can be converted but not
          created nor destroyed, only transformed`,
        },
      ],
    },
    {
      title: "Fluid Mechanics",
      description:
        "A branch of mechanics that is concerned with the properties of liquids and gases",
      cards: [
        {
          term: "Pascal (Pa)",
          definition: "the SI unit of pressure; equivalent to N/m2",
        },
        {
          term: "Archimedes principle",
          definition:
            "principle stating that the buoyant force exerted by a fluid on an immersed object is equal to the weight of the fluid the object displaces",
        },
        {
          term: "Bernoulli's principle",
          definition:
            "principle stating that total energy for a confined ideal fluid flowing through a pipe is conserved at all locations within the pipe",
        },
      ],
    },
  ]);

  const handleExitSession = () => {
    setDecks((prevDecks) => {
      return prevDecks.filter(
        (prevDeck) => prevDeck.title !== "" || prevDeck.description !== ""
      );
    });

    setDecks((prevDecks) => {
      prevDecks.map((prevDeck) => {
        prevDeck.cards = prevDeck.cards.filter(
          (card) => card.term !== "" && card.definition !== ""
        );
        return prevDeck;
      });
      return prevDecks;
    });
    setStudySelected(false);
    setEditSelected(false);
    setQuizSelected(false);
    setCurrentDeckId(null);
  };

  return (
    <main className="quizlet-container">
      {editSelected ? (
        <EditFlashCards
          decks={decks}
          deckId={currentDeckId}
          setDecks={setDecks}
          exitSession={handleExitSession}
        />
      ) : studySelected ? (
        <StudyCards
          decks={decks}
          deckId={currentDeckId}
          exitSession={handleExitSession}
        />
      ) : quizSelected ? (
        <Write
          decks={decks}
          deckId={currentDeckId}
          exitSession={handleExitSession}
        />
      ) : (
        <Decks
          decks={decks}
          setDecks={setDecks}
          setStudySelected={setStudySelected}
          setEditSelected={setEditSelected}
          setQuizSelected={setQuizSelected}
          setCurrentDeckId={setCurrentDeckId}
        />
      )}
    </main>
  );
};

export default Quizlet;

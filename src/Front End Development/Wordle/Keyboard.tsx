import { useEffect } from "react";
import WordleButton from "./WordleButton";

type KeyboardProps = {
  addLetter: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  removeLetter: () => void;
  checkWord: () => void;
};

const Keyboard = ({ addLetter, removeLetter, checkWord }: KeyboardProps) => {
  useEffect(() => {
    const keyPress = (e: Event) => {
      const keyboardEvent = e as KeyboardEvent;

      if (keyboardEvent.key == "Tab") {
        keyboardEvent.preventDefault();
      } else if (/^[a-z]$/i.test(keyboardEvent.key)) {
        const letter = document.getElementById(
          keyboardEvent.key.toUpperCase(),
        ) as HTMLInputElement;
        letter?.click();
      } else if (keyboardEvent.key == "Backspace") {
        const deleteKey = document.getElementById(
          keyboardEvent.key,
        ) as HTMLInputElement;
        deleteKey?.click();
      } else if (keyboardEvent.key == "Enter") {
        keyboardEvent.preventDefault();
        const enterKey = document.getElementById(
          keyboardEvent.key,
        ) as HTMLInputElement;
        enterKey?.click();
      }
    };
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, []);

  return (
    <>
      <div className="keyboard-container">
        <div className="keyboard-row">
          <WordleButton addLetter={addLetter} character="Q" />
          <WordleButton addLetter={addLetter} character="W" />
          <WordleButton addLetter={addLetter} character="E" />
          <WordleButton addLetter={addLetter} character="R" />
          <WordleButton addLetter={addLetter} character="T" />
          <WordleButton addLetter={addLetter} character="Y" />
          <WordleButton addLetter={addLetter} character="U" />
          <WordleButton addLetter={addLetter} character="I" />
          <WordleButton addLetter={addLetter} character="O" />
          <WordleButton addLetter={addLetter} character="Y" />
          <WordleButton addLetter={addLetter} character="U" />
          <WordleButton addLetter={addLetter} character="I" />
          <WordleButton addLetter={addLetter} character="O" />
          <WordleButton addLetter={addLetter} character="P" />
        </div>
        <div className="keyboard-row">
          <div className="wordle-key"></div>
          <WordleButton addLetter={addLetter} character="A" />
          <WordleButton addLetter={addLetter} character="S" />
          <WordleButton addLetter={addLetter} character="D" />
          <WordleButton addLetter={addLetter} character="F" />
          <WordleButton addLetter={addLetter} character="G" />
          <WordleButton addLetter={addLetter} character="H" />
          <WordleButton addLetter={addLetter} character="J" />
          <WordleButton addLetter={addLetter} character="K" />
          <WordleButton addLetter={addLetter} character="L" />
          <div className="wordle-key"></div>
        </div>
        <div className="keyboard-row">
          <button
            id="Enter"
            onClick={() => checkWord()}
            className={`wordle-key gray-key wordle-lg-key`}
          >
            Enter
          </button>
          <WordleButton addLetter={addLetter} character="Z" />
          <WordleButton addLetter={addLetter} character="X" />
          <WordleButton addLetter={addLetter} character="C" />
          <WordleButton addLetter={addLetter} character="V" />
          <WordleButton addLetter={addLetter} character="B" />
          <WordleButton addLetter={addLetter} character="N" />
          <WordleButton addLetter={addLetter} character="M" />
          <button
            id="Backspace"
            onClick={removeLetter}
            className={`wordle-key gray-key wordle-lg-key`}
          >
            Del
          </button>
        </div>
      </div>
    </>
  );
};

export default Keyboard;

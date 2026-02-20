type WorldButtonProps = {
  addLetter: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  character: string;
};

const WordleButton = ({ addLetter, character }: WorldButtonProps) => {
  return (
    <button id={character} onClick={addLetter} className="wordle-key gray-key">
      {character}
    </button>
  );
};

export default WordleButton;

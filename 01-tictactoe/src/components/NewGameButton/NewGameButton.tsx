import './NewGameButton.css';

type NewGameButtonProps = {
  onClick: () => void;
};

const NewGameButton: React.FC<NewGameButtonProps> = ({ onClick }: NewGameButtonProps) => (
  <button id='new-game-button' onClick={onClick}>
    New Game
  </button>
);

export default NewGameButton;

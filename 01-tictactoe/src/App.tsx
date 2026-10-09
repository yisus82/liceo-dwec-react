import { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';
import Header from './components/Header';
import NewGameButton from './components/NewGameButton';
import { CellValue, Turn, Winner, type BoardType } from './types';

const App: React.FC = () => {
  const [turn, setTurn] = useState<Turn>(Turn.PLAYER_1);
  const [board, setBoard] = useState<BoardType>([
    [CellValue.EMPTY, CellValue.EMPTY, CellValue.EMPTY],
    [CellValue.EMPTY, CellValue.EMPTY, CellValue.EMPTY],
    [CellValue.EMPTY, CellValue.EMPTY, CellValue.EMPTY],
  ]);
  const [winner, setWinner] = useState<Winner>(Winner.NONE);

  const generateRandomTurn = () => {
    const randomTurn = Math.random() < 0.5 ? Turn.PLAYER_1 : Turn.PLAYER_2;
    setTurn(randomTurn);
  };

  useEffect(() => generateRandomTurn(), []);

  const handleCellClick = (row: number, col: number) => {
    if (board[row][col] !== CellValue.EMPTY || winner !== Winner.NONE) {
      return;
    }
    const newBoard = [...board];
    newBoard[row][col] = turn === Turn.PLAYER_1 ? CellValue.PLAYER_1 : CellValue.PLAYER_2;
    setBoard(newBoard);
    changeTurn();
  };

  const changeTurn = () => setTurn(turn === Turn.PLAYER_1 ? Turn.PLAYER_2 : Turn.PLAYER_1);

  const checkValues = (a: CellValue, b: CellValue, c: CellValue) => {
    if (a !== CellValue.EMPTY && a === b && b === c) {
      return a === CellValue.PLAYER_1 ? Winner.PLAYER_1 : Winner.PLAYER_2;
    }
    return Winner.NONE;
  };

  const checkWinner = () => {
    const winnerRows = board.map(row => checkValues(row[0], row[1], row[2]));
    const winnerCols = [0, 1, 2].map(col =>
      checkValues(board[0][col], board[1][col], board[2][col]),
    );
    const winnerDiags = [
      checkValues(board[0][0], board[1][1], board[2][2]),
      checkValues(board[0][2], board[1][1], board[2][0]),
    ];

    const allWinners = [...winnerRows, ...winnerCols, ...winnerDiags];
    const finalWinner = allWinners.find(winner => winner !== Winner.NONE);

    if (finalWinner) {
      setWinner(finalWinner);
    } else if (board.flat().every(cell => cell !== CellValue.EMPTY)) {
      setWinner(Winner.DRAW);
    }
  };

  useEffect(() => {
    checkWinner();
  }, [board]);

  const resetGame = () => {
    setBoard([
      [CellValue.EMPTY, CellValue.EMPTY, CellValue.EMPTY],
      [CellValue.EMPTY, CellValue.EMPTY, CellValue.EMPTY],
      [CellValue.EMPTY, CellValue.EMPTY, CellValue.EMPTY],
    ]);
    setWinner(Winner.NONE);
    generateRandomTurn();
  };

  return (
    <>
      <Header turn={turn} winner={winner} />
      <Board board={board} onCellClick={handleCellClick} />
      <NewGameButton onClick={resetGame} />
    </>
  );
};

export default App;

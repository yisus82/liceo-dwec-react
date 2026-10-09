import { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';
import Header from './components/Header';
import { CellValue, Turn, type BoardType } from './types';

const App = () => {
  const [turn, setTurn] = useState<Turn>(Turn.PLAYER_1);
  const [board, setBoard] = useState<BoardType>([
    [CellValue.EMPTY, CellValue.EMPTY, CellValue.EMPTY],
    [CellValue.EMPTY, CellValue.EMPTY, CellValue.EMPTY],
    [CellValue.EMPTY, CellValue.EMPTY, CellValue.EMPTY],
  ]);

  const generateRandomTurn = () => {
    const randomTurn = Math.random() < 0.5 ? Turn.PLAYER_1 : Turn.PLAYER_2;
    setTurn(randomTurn);
  };

  useEffect(() => generateRandomTurn(), []);

  const handleCellClick = (row: number, col: number) => {
    if (board[row][col] !== CellValue.EMPTY) {
      return;
    }
    const newBoard = [...board];
    newBoard[row][col] = turn === Turn.PLAYER_1 ? CellValue.PLAYER_1 : CellValue.PLAYER_2;
    setBoard(newBoard);
    changeTurn();
  };

  const changeTurn = () => setTurn(turn === Turn.PLAYER_1 ? Turn.PLAYER_2 : Turn.PLAYER_1);

  return (
    <>
      <Header turn={turn} />
      <Board board={board} onCellClick={handleCellClick} />
    </>
  );
};

export default App;

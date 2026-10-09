import { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';
import Header from './components/Header';
import { CellValue, Turn, type BoardType } from './types';

const App = () => {
  const [turn, setTurn] = useState<Turn>(Turn.PLAYER_1);
  const [board, setBoard] = useState<BoardType>([
    [CellValue.EMPTY, CellValue.EMPTY, CellValue.PLAYER_1],
    [CellValue.PLAYER_1, CellValue.PLAYER_2, CellValue.PLAYER_2],
    [CellValue.EMPTY, CellValue.PLAYER_1, CellValue.EMPTY],
  ]);

  const generateRandomTurn = () => {
    const randomTurn = Math.random() < 0.5 ? Turn.PLAYER_1 : Turn.PLAYER_2;
    setTurn(randomTurn);
  };

  useEffect(() => generateRandomTurn(), []);

  return (
    <>
      <Header turn={turn} />
      <Board board={board} onCellClick={() => {}} />
    </>
  );
};

export default App;

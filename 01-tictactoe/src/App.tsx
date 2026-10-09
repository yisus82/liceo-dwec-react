import { useEffect, useState } from 'react';
import './App.css';
import Cell from './components/Cell';
import Header from './components/Header';
import { CellValue, Turn } from './types';

const App = () => {
  const [turn, setTurn] = useState<Turn>(Turn.PLAYER_1);
  const [board, setBoard] = useState([
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
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className='row'>
          {row.map((cell, colIndex) => (
            <Cell value={cell} onClick={() => {}} />
          ))}
        </div>
      ))}
    </>
  );
};

export default App;

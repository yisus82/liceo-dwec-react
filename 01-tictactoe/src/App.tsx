import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import { Turn, type TurnType } from './types';

const App = () => {
  const [turn, setTurn] = useState<TurnType>(Turn.PLAYER_1);

  const generateRandomTurn = () => {
    const randomTurn = Math.random() < 0.5 ? Turn.PLAYER_1 : Turn.PLAYER_2;
    setTurn(randomTurn);
  };

  useEffect(() => generateRandomTurn(), []);

  return <Header turn={turn} />;
};

export default App;

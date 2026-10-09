import type { BoardType } from '../../types';
import Cell from '../Cell';
import './Board.css';

type BoardProps = {
  board: BoardType;
  onCellClick: (rowIndex: number, colIndex: number) => void;
};

const Board = ({ board, onCellClick }: BoardProps) => (
  <div id='board'>
    {board.map((row, rowIndex) => (
      <div key={rowIndex} className='row'>
        {row.map((cell, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            value={cell}
            onClick={() => onCellClick(rowIndex, colIndex)}
          />
        ))}
      </div>
    ))}
  </div>
);

export default Board;

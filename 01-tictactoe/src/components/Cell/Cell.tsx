import type { CellValue } from '../../types';
import './Cell.css';

type CellProps = {
  value: CellValue;
  onClick: () => void;
};

const Cell = ({ value, onClick }: CellProps) => (
  <button className='cell' onClick={onClick}>
    {value}
  </button>
);

export default Cell;

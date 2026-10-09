import type { Turn, Winner } from '../../types';
import Message from '../Message';
import Title from '../Title';
import './Header.css';

type HeaderProps = {
  turn: Turn;
  winner: Winner;
};

const Header = ({ turn, winner }: HeaderProps) => (
  <header>
    <Title />
    <Message turn={turn} winner={winner} />
  </header>
);

export default Header;

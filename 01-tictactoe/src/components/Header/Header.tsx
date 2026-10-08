import Message from '../Message';
import Title from '../Title';
import './Header.css';

type HeaderProps = {
  turn: string;
};

const Header = ({ turn }: HeaderProps) => (
  <header>
    <Title />
    <Message turn={turn} />
  </header>
);

export default Header;

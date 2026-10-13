import { Link } from 'react-router-dom';
import './ListItem.css';

export type ListItemProps = {
  text: string;
  link: string;
};

const ListItem: React.FC<ListItemProps> = ({ text, link }) => (
  <li className='list-item'>
    <Link to={link}>{text}</Link>
  </li>
);

export default ListItem;

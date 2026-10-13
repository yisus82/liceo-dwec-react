import './ListItem.css';

export type ListItemProps = {
  text: string;
  link: string;
};

const ListItem: React.FC<ListItemProps> = ({ text, link }) => (
  <li className='list-item'>
    <a href={link}>{text}</a>
  </li>
);

export default ListItem;

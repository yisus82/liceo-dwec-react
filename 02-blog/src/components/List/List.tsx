import type { ListItemProps } from '../ListItem/ListItem';
import ListItem from '../ListItem/ListItem';
import './List.css';

type ListProps = {
  items: ListItemProps[];
};

const List: React.FC<ListProps> = ({ items }) => (
  <ul className='list'>
    {items.map((item, index) => (
      <ListItem key={index} text={item.text} link={item.link} />
    ))}
  </ul>
);

export default List;

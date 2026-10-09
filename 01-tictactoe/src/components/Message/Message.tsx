import { type Turn, Winner } from '../../types';
import './Message.css';

type MessageProps = {
  turn: Turn;
  winner: Winner;
};

const Message: React.FC<MessageProps> = ({ turn, winner }: MessageProps) => {
  const message = winner !== Winner.NONE ? `Winner: ${winner}` : `Turn: ${turn}`;
  return <p id='message'>{message}</p>;
};

export default Message;

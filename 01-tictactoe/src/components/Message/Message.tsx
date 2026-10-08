import './Message.css';

type MessageProps = {
  turn: string;
};

const Message = ({ turn }: MessageProps) => <p id='message'>Turn: {turn}</p>;

export default Message;

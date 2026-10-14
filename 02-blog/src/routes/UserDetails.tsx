import { useParams } from 'react-router-dom';

const UserDetails: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();

  return <h2>User Details: {userId}</h2>;
};

export default UserDetails;

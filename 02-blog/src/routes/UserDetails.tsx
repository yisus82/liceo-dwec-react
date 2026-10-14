import { Link, useLoaderData, type LoaderFunction } from 'react-router-dom';
import type { UserResponse } from '../types';

export const userLoader: LoaderFunction = async ({ params }) => {
  const { userId } = params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const user: UserResponse = await response.json();
  return { user, userId };
};

const UserDetails: React.FC = () => {
  const { user, userId } = useLoaderData<{ user: UserResponse; userId: string }>();

  if (user && Object.keys(user).length === 0 && Object.getPrototypeOf(user) === Object.prototype) {
    return <p>The user with ID {userId} was not found.</p>;
  }

  return (
    <div>
      <p>
        <strong>Name: </strong>
        {user.name}
      </p>
      <p>
        <strong>Email: </strong>
        {user.email}
      </p>
      <p>
        <strong>Website: </strong>
        {user.website}
      </p>
      <p>
        <strong>Phone: </strong>
        {user.phone}
      </p>
      <p>
        <Link to={`/posts?userId=${user.id}`}>View user posts</Link>
      </p>
    </div>
  );
};

export default UserDetails;

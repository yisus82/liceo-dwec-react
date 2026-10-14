import { useLoaderData, type LoaderFunction } from 'react-router-dom';
import List from '../components/List';
import type { UserResponse } from '../types';

export const usersLoader: LoaderFunction = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: UserResponse[] = await response.json();
  return users;
};

const Users: React.FC = () => {
  const users = useLoaderData<UserResponse[]>();
  const items = users.map(user => ({
    text: `${user.name} (${user.email})`,
    link: `/users/${user.id}`,
  }));

  return (
    <>
      <h2>Users</h2>
      {users.length === 0 ? (
        <p className='no-items'>No users available.</p>
      ) : (
        <List items={items} />
      )}
    </>
  );
};

export default Users;

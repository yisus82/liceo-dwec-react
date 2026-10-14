import { useLoaderData, type LoaderFunction } from 'react-router-dom';
import List from '../components/List';
import type { PostResponse } from '../types';

export const homeLoader: LoaderFunction = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: PostResponse[] = await response.json();
  return posts.slice(0, 10);
};

const Home: React.FC = () => {
  const posts = useLoaderData<PostResponse[]>();
  const items = posts.map(post => ({
    text: post.title,
    link: `/posts/${post.id}`,
  }));

  return (
    <>
      <h2>Featured Posts</h2>
      {posts.length === 0 ? (
        <p className='no-items'>No posts available.</p>
      ) : (
        <List items={items} />
      )}
    </>
  );
};

export default Home;

import { useLoaderData, type LoaderFunction } from 'react-router-dom';
import List from '../components/List';
import type { PostResponse } from '../types';

export const postsLoader: LoaderFunction = async ({ request }) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: PostResponse[] = await response.json();
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const userId = searchParams.get('userId');

  if (userId) {
    return posts.filter(post => post.userId === parseInt(userId));
  }

  return posts;
};

const Posts: React.FC = () => {
  const posts = useLoaderData<PostResponse[]>();
  const items = posts.map(post => ({
    text: post.title,
    link: `/posts/${post.id}`,
  }));

  return (
    <>
      <h2>Posts</h2>
      {posts.length === 0 ? (
        <p className='no-items'>No posts available.</p>
      ) : (
        <List items={items} />
      )}
    </>
  );
};

export default Posts;

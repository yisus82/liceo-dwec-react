import { useLoaderData, type LoaderFunction } from 'react-router-dom';
import type { PostResponse } from '../types';

export const postLoader: LoaderFunction = async ({ params }) => {
  const { postId } = params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const post: PostResponse = await response.json();
  return { post, postId };
};

const PostDetails: React.FC = () => {
  const { post, postId } = useLoaderData<{ post: PostResponse; postId: string }>();

  if (post && Object.keys(post).length === 0 && Object.getPrototypeOf(post) === Object.prototype) {
    return <p>The post with ID {postId} was not found.</p>;
  }

  return (
    <>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  );
};

export default PostDetails;

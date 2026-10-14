import { useParams } from 'react-router-dom';

const PostDetails: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();

  return <h2>Post Details: {postId}</h2>;
};

export default PostDetails;

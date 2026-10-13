import List from '../components/List';

const Home: React.FC = () => {
  const items = [
    { text: 'Post 1', link: '/posts/1' },
    { text: 'Post 2', link: '/posts/2' },
    { text: 'Post 3', link: '/posts/3' },
    { text: 'Post 4', link: '/posts/4' },
    { text: 'Post 5', link: '/posts/5' },
  ];

  return (
    <>
      <h2>Featured Posts</h2>
      <List items={items} />
    </>
  );
};

export default Home;

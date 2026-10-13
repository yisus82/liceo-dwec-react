import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import List from './components/List';

const App: React.FC = () => {
  const items = [
    { text: 'Post 1', link: '/posts/1' },
    { text: 'Post 2', link: '/posts/2' },
    { text: 'Post 3', link: '/posts/3' },
    { text: 'Post 4', link: '/posts/4' },
    { text: 'Post 5', link: '/posts/5' },
  ];

  return (
    <>
      <Header />
      <main>
        <List items={items} />
      </main>
      <Footer />
    </>
  );
};

export default App;

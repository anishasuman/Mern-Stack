import './App.css';

import Navbar from './components/navbar';
import Main from './components/main';
import Footer from './components/footer';

function App() {
  const links = [
    { id: 1, title: 'Home', url: '/' },
    { id: 2, title: 'About', url: '/about' },
    { id: 3, title: 'Contact', url: '/contact' },
  ];

  return (
    <>
      <Navbar brandName="My App" links={links} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
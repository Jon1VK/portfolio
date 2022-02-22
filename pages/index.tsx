import type { NextPage } from 'next';
import Header from '../components/header';
import About from '../components/about';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <About />
    </>
  );
};

export default Home;

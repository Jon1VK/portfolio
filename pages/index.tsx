import type { NextPage } from 'next';
import Header from '../components/header';
import About from '../components/about';
import Skills from '../components/skills';
import Section from '../components/section';
import profilePicture from '../public/profile.jpg';
import skillsPicture from '../public/skills.jpg';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Section picture={profilePicture}>
        <About />
      </Section>
      <Section picture={skillsPicture}>
        <Skills />
      </Section>
    </>
  );
};

export default Home;

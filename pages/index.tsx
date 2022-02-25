import type { NextPage } from 'next';
import Image from 'next/image';
import Header from '../components/header';
import Section from '../components/section';
import profilePicture from '../public/profile.jpg';
import skillsPicture from '../public/skills.jpg';
import htmlLogo from '../public/html5.svg';
import cssLogo from '../public/css3.svg';
import sassLogo from '../public/sass.svg';
import jsLogo from '../public/javascript.svg';
import reactLogo from '../public/react.svg';
import rubyLogo from '../public/ruby.svg';
import rubyOnRailsLogo from '../public/ruby-on-rails.svg';
import postgresLogo from '../public/postgresql.svg';
import gitLogo from '../public/git.svg';
import vsCodeLogo from '../public/visual-studio-code.svg';
import linuxLogo from '../public/linux.svg';
import herokuLogo from '../public/heroku.svg';
import styles from '../styles/home.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Section picture={profilePicture}>
        <div>
          <h2>About me</h2>
          <p>I am 28 years old Software Engineer Trainee from Vincit.</p>
          <p>
            I have Master of Science degree in mathematics, so I am highly skilled
            in logical reasoning and learning new stuff by making connections
            between topics and concepts.
          </p>
          <p>
            I have acquired my software development knowledge from the computer
            science studies in the University of Turku and by studying independently
            in my spare time.
          </p>
          <p>
            In my free time I train sprinting and I have achieved 7 Finnish
            Championship medals in 400m hurdles.
          </p>
        </div>
      </Section>
      <Section picture={skillsPicture}>
        <div>
          <h2>Skills</h2>
          <p>
            Here are some of the techs and tools that I have used in my projects and
            on my journey to become a proficient Software Engineer.
          </p>
          <div className={styles.skills}>
            <Image src={htmlLogo} width={100} height={100} />
            <Image src={cssLogo} width={100} height={100} />
            <Image src={jsLogo} width={100} height={100} />
            <Image src={reactLogo} width={100} height={100} />
            <Image src={sassLogo} width={100} height={100} />
            <Image src={rubyLogo} width={100} height={100} />
            <Image src={rubyOnRailsLogo} width={100} height={100} />
            <Image src={postgresLogo} width={100} height={100} />
            <Image src={herokuLogo} width={100} height={100} />
            <Image src={gitLogo} width={100} height={100} />
            <Image src={vsCodeLogo} width={100} height={100} />
            <Image src={linuxLogo} width={100} height={100} />
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;

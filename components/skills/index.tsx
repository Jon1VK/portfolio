import Image from 'next/image';
import htmlLogo from '../../public/html5.svg';
import cssLogo from '../../public/css3.svg';
import sassLogo from '../../public/sass.svg';
import jsLogo from '../../public/javascript.svg';
import reactLogo from '../../public/react.svg';
import rubyLogo from '../../public/ruby.svg';
import rubyOnRailsLogo from '../../public/ruby-on-rails.svg';
import postgresLogo from '../../public/postgresql.svg';
import gitLogo from '../../public/git.svg';
import vsCodeLogo from '../../public/visual-studio-code.svg';
import linuxLogo from '../../public/linux.svg';
import herokuLogo from '../../public/heroku.svg';
import styles from './styles.module.scss';

export default function Skills() {
  return (
    <>
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
    </>
  );
}

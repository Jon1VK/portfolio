import Image from 'next/image';
import profilePicture from '../../public/profile.jpg';
import styles from './styles.module.scss';

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.profile}>
        <Image src={profilePicture} width={399} height={600} />
      </div>
      <div className={styles.text}>
        <h2>About me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere animi
          eligendi repellat culpa quisquam eius error quibusdam doloremque
          repudiandae. Repellendus minus fuga architecto dolorem vero aperiam ab
          eum optio assumenda.
        </p>
      </div>
    </section>
  );
}

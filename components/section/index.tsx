import Image from 'next/image';
import styles from './styles.module.scss';

export default function Section({
  picture,
  children,
}: React.PropsWithChildren<{ picture: StaticImageData }>) {
  return (
    <section className={styles.section}>
      <div className={styles.picture}>
        <Image src={picture} width={500} height={750} layout='responsive' />
      </div>
      <div className={styles.text}>{children}</div>
    </section>
  );
}

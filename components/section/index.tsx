import Image from 'next/image';
import styles from './styles.module.scss';

export default function Section({
  picture,
  children,
}: React.PropsWithChildren<{ picture: StaticImageData }>) {
  return (
    <section className={styles.section}>
      <div className={styles.picture}>
        <Image src={picture} width={450} height={675} />
      </div>
      <div className={styles.text}>{children}</div>
    </section>
  );
}

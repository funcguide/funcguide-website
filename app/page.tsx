import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.center}>
        <div className={styles.content}>
          <img className={styles.image} src="/logo.png" />
          <h1 className={styles.title}>Coming Soon</h1>
        </div>
      </div>
    </>
  );
}

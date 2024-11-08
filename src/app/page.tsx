import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <main>
        <div className={styles.hello}>
          <p>Hello there!</p>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.welcome}>
      <h1 style={{ padding: '2rem', fontSize: '2rem' }}>
        You can check 5th Dungeons & Dragons Spells here, please click Spells
        above to see all spells.
      </h1>
    </div>
  );
}

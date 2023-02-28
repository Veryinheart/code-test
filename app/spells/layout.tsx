import SpellList from './SpellList';
import styles from '../page.module.css';

export default function SpellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={styles.spellsContainer}>
      <div className={styles.spellList}>
        {/*Nextjs 13 has Promise<element> is not a vaild JSX bug now, they are working on it*/}
        {/* @ts-ignore */}
        <SpellList />
      </div>
      <div className={styles.spellInfo}>{children}</div>
    </main>
  );
}

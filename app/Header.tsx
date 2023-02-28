import Link from 'next/link';
import React from 'react';
import styles from './page.module.css';

function Header() {
  return (
    <div className={styles.headerContainer}>
      <Link href="/">Home</Link>
      &nbsp;
      <Link href="/spells">Spells</Link>
      &nbsp;
      <Link href="/favorites">Favorites</Link>
    </div>
  );
}

export default Header;

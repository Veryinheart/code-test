'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css'

function Favorites() {
  const [favoritesList, setFavoriteList] = useState<string[]>();

  useEffect(() => {
    const fetchFavorites = () => {
      const data = JSON.parse(localStorage.getItem('favorites') || '{}');
      setFavoriteList(data);
    };
    fetchFavorites();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>Favorites List</div>

      {favoritesList ? (favoritesList.map((spell) =>
        <Link href={`/spells/${spell}`} key={spell} className={styles.listItem} >{spell}</Link>
      )) : `Nothing in your favorites list, let's add some`}
    </div>
  );
}

export default Favorites;

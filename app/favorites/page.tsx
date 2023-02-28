'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../page.module.css';

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
      <h1 className={styles.header}>Favorites List</h1>
      <ul>
        {Array.isArray(favoritesList)
          ? favoritesList?.map((spell) => (
              <li key={spell}>
                <Link href={`/spells/${spell}`} className={styles.listItem}>
                  {spell}
                </Link>
              </li>
            ))
          : `Nothing in your favorites list, let's add some!`}
      </ul>
    </div>
  );
}

export default Favorites;

import Link from 'next/link';
import React from 'react';
import { Spells, SpellListItem } from '../../typings.s';
import styles from './page.module.css';

const fetchSpells = async () => {
  const res = await fetch('https://www.dnd5eapi.co/api/spells');
  const spells: Spells = await res.json();
  return spells;
};

async function SpellList() {
  const { results: spells } = await fetchSpells();

  return (
    <div className={styles.container}>
      <p className={styles.header}>Spell List:</p>
      {spells &&
        spells.map((spell: SpellListItem) => (
          <div key={spell.index} className={styles.listItem}>
            <div>
              <Link href={`/spells/${spell.index}`} className={styles.listItem}>
                {' '}
                {spell.name}
              </Link>
            </div>
            <div>
              <Link href={`/spells/${spell.index}`}>See Details</Link>
            </div>
          </div>
        ))}
    </div>
  );
}

export default SpellList;

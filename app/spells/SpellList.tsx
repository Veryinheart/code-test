import Link from 'next/link';
import React from 'react';
import { Spells, SpellListItem } from '../../typings.s';

const fetchSpells = async () => {
  const res = await fetch('https://www.dnd5eapi.co/api/spells');
  const spells: Spells = await res.json();

  return spells;
};

async function SpellList() {
  const { results: spells } = await fetchSpells();
  // console.log(spells);
  return (
    <>
      {spells &&
        spells.map((spell: SpellListItem) => (
          <div key={spell.index}>
            <Link href={`/spells/${spell.index}`}>
              <p>Spell Name: {spell.name}</p>
            </Link>
          </div>
        ))}
    </>
  );
}

export default SpellList;

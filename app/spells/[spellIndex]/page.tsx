'use client';
import React, { useEffect, useState } from 'react';
import { SpellInfoType } from '@/typings.s';
import styles from './styles.module.css';
import Item from './Item';
//import { useLocalStorage } from '@/hooks/useLocalStorage';

type PageProps = {
  params: {
    spellIndex: string;
  };
};

function SpellInfo({ params: { spellIndex } }: PageProps) {
  //const [storage, setStorage] = useLocalStorage('favorites');
  const [spellInfo, setSpellInfo] = useState<SpellInfoType>();

  useEffect(() => {
    const fetchSpellInfo = async (index: string) => {
      const response = await fetch(
        `https://www.dnd5eapi.co/api/spells/${index}`,
        {
          cache: 'no-cache',
        }
      );
      const data: SpellInfoType = await response.json();

      setSpellInfo(data);
    };
    fetchSpellInfo(spellIndex);
  }, [spellIndex]);

  function handleClick(value: string): void {
    const favoritesList = localStorage.getItem('favorites');
    if (favoritesList?.length !== 0) {
      const newList = favoritesList?.concat(value);
      localStorage.setItem('favorites', JSON.stringify(newList));
    } else {
      const newList = [value];
      localStorage.setItem('favorites', JSON.stringify(newList));
    }
  }

  return (
    <div className={styles.spell}>
      {spellInfo && (
        <>
          <button
            className={styles.button}
            onClick={() => handleClick(spellInfo.index)}
          >
            Add to Favorites
          </button>

          <Item>Name: {spellInfo?.name}</Item>
          <Item>Description: {spellInfo?.desc}</Item>
          <Item>Range: {spellInfo?.range} </Item>
          <Item>Ritual: {spellInfo?.ritual ? 'Yes' : 'No'}</Item>
          <Item>Duration: {spellInfo?.duration}</Item>
          <Item>Ritual: {spellInfo?.concentration ? 'Yes' : 'No'}</Item>
          <Item>Casting Time: {spellInfo?.casting_time} </Item>
          <Item>Level: {spellInfo?.level}</Item>
          <Item>School:{spellInfo?.school.name}</Item>
          <Item>Classes:{spellInfo?.classes[0]?.name}</Item>
          <Item>Subclasses:{spellInfo?.subclasses[0]?.name}</Item>
        </>
      )}
    </div>
  );
}

export default SpellInfo;

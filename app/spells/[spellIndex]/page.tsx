'use client';
import React, { useEffect, useState } from 'react';
import { SpellInfoType } from '@/typings.s';
import styles from './page.module.css';
import Item from './Item';
//import { useLocalStorage } from '@/hooks/useLocalStorage';

type PageProps = {
  params: {
    spellIndex: string;
  };
};

function SpellInfo({ params: { spellIndex } }: PageProps) {

  const [spellInfo, setSpellInfo] = useState<SpellInfoType>();
  const [isFavorited, setIsFavorited] = useState(false);

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

    const checkIsFavorited = () => {
      const favoritesList = JSON.parse(localStorage.getItem('favorites') || '{}');

      setIsFavorited(favoritesList.includes(spellIndex))
    }

    fetchSpellInfo(spellIndex);
    checkIsFavorited();

  }, [spellIndex]);

  // add spell index into localstorage 
  function handleClick(value: string): void {
    const favoritesList = JSON.parse(localStorage.getItem('favorites') || '{}');


    if (Array.isArray(favoritesList)) {

      if (isFavorited) {
        const index = favoritesList.indexOf(value);
        favoritesList.splice(index, 1);
        localStorage.setItem('favorites', JSON.stringify(favoritesList));
        setIsFavorited(false);
        return;
      }

      if (!favoritesList.includes(value)) {
        favoritesList.push(value);
        localStorage.setItem('favorites', JSON.stringify(favoritesList));
        setIsFavorited(true);
      }
    } else {
      const newList = new Array(value);
      localStorage.setItem('favorites', JSON.stringify(newList));
      setIsFavorited(true);
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
            {isFavorited ? 'Remove from Favorites' : 'Add to Favorites'}
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

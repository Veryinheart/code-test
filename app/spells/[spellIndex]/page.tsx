import React from 'react';
import { SpellInfoType } from '@/typings.s';
import styles from './styles.module.css';
import Item from './Item';

type PageProps = {
  params: {
    spellIndex: string;
  };
};

const fetchSpellInfo = async (index: string) => {
  const response = await fetch(`https://www.dnd5eapi.co/api/spells/${index}`, {
    cache: 'no-cache',
  });
  const spellInfo: SpellInfoType = await response.json();

  return spellInfo;
};

async function SpellInfo({ params: { spellIndex } }: PageProps) {
  const spellInfo = await fetchSpellInfo(spellIndex);

  return (
    <div className={styles.spell}>
      <Item>Name: {spellInfo.name}</Item>
      <Item>Description: {spellInfo.desc}</Item>
      <Item>Range: {spellInfo.range} </Item>
      <Item>Ritual: {spellInfo.ritual ? 'Yes' : 'No'}</Item>
      <Item>Duration: {spellInfo.duration}</Item>
      <Item>Ritual: {spellInfo.concentration ? 'Yes' : 'No'}</Item>
      <Item>Casting Time: {spellInfo.casting_time} </Item>
      <Item>Level: {spellInfo.level}</Item>
      <Item>Damage:{spellInfo.damage['damage_type']?.name}</Item>
      <Item>School:{spellInfo.school.name}</Item>
      <Item>Classes:{spellInfo.classes[0]?.name}</Item>
      <Item>Subclasses:{spellInfo.subclasses[0]?.name}</Item>
    </div>
  );
}

export default SpellInfo;

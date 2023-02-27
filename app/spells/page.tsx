import React from 'react';
import SpellList from './SpellList';

function Spells() {
  return (
    <div>
      {/*Nextjs 13 has Promise<element> is not a vaild JSX bug now, they are working on it*/}
      {/* @ts-ignore */}
      <SpellList />
    </div>
  );
}

export default Spells;

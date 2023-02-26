import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <div
      style={{
        padding: '1.25rem',
        backgroundColor: '#3B82F6',
        color: 'white',
      }}
    >
      <Link href="/">Home</Link>
      &nbsp;
      <Link href="/spells">Spells</Link>
      &nbsp;
      <Link href="/favorites">Favorites</Link>
    </div>
  );
}

export default Header;

import React from 'react';
import styles from './styles.module.css';

function Item({ children }: { children: React.ReactNode }) {
  return <div className={styles.item}>{children}</div>;
}

export default Item;

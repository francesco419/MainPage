import styles from './myHeader.module.css';
import { useRef, useState } from 'react';

export default function MyHeader() {
  return (
    <div className={styles['hidden-header']}>
      <button>ABOUT</button>
      <button>SKILL</button>
      <button>PROJECT</button>
      <button>CONTACT</button>
    </div>
  );
}

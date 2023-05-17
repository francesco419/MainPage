import styles from './myHeader.module.css';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MyHeader() {
  const nav = useNavigate();
  return (
    <div className={styles['hidden-header']}>
      <button>ABOUT</button>
      <button>SKILL</button>
      <button
        onClick={() => {
          nav('/project/MainPage');
        }}
      >
        PROJECT
      </button>
      <button>CONTACT</button>
    </div>
  );
}

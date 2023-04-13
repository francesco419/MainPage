import { forwardRef } from 'react';
import styles from './title.module.css';

export const Title = forwardRef(function Title({ inputref, title }) {
  return (
    <div className={styles['title']} ref={inputref}>
      <h2>{title}</h2>
    </div>
  );
});

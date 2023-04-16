import { forwardRef } from 'react';
import styles from './title.module.css';

export const Title = forwardRef(function Title({ inputref, title, style }) {
  return (
    <div style={style} className={styles['title']} ref={inputref}>
      <h2>{title}</h2>
    </div>
  );
});

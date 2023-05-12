import styles from './about.module.css';
import { useRef, useState } from 'react';

export default function About({ number, text, detail }) {
  const ref = useRef();
  const [click, setClick] = useState(false);
  const onClickHandler = () => {
    if (click) {
      setClick((click) => false);
      ref.current.style.display = 'block';
    }

    if (!click) {
      setClick((click) => true);
      ref.current.style.display = 'none';
    }
  };

  return (
    <div className={styles['hidden-about-index']} onClick={onClickHandler}>
      <div ref={ref} className={styles['hidden-about-abs']}></div>
      <div className={styles['hidden-about-titles']}>
        <p className={styles['hidden-about-num']}>{number}</p>
        <p className={styles['hidden-about-text']}>{text}</p>
      </div>
      {click ? (
        <ul className={styles['hidden-about-detail']}>
          {detail.map((detail) => {
            return (
              <li>
                <p>{detail}</p>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

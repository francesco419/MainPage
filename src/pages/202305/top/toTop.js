import { useEffect, useState } from 'react';
import styles from './toTop.module.css';

export default function TopIndicator() {
  const [pageY, setPageY] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', yScroll);
    return () => {
      window.removeEventListener('scroll', yScroll);
    };
  }, []);

  function yScroll() {
    let y = window.scrollY;
    let bottom = document.body.scrollHeight - window.innerHeight;
    if (y < bottom && y > 0) {
      setPageY(1);
      return 1;
    }
    if (y === 0) {
      setPageY(0);
      return 0;
    }
    if (y === bottom) {
      setPageY(2);
      return 2;
    }
  }

  const toUp = () => {
    window.scrollTo(0, 0);
  };

  const toDown = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <div className={styles['top-container']}>
      {pageY === 0 ? <button onClick={toDown}>Down</button> : null}
      {pageY === 2 ? <button onClick={toUp}>Top</button> : null}
      {pageY === 1 ? (
        <>
          <button onClick={toUp}>Top</button>
          <button onClick={toDown}>Down</button>
        </>
      ) : null}
    </div>
  );
}

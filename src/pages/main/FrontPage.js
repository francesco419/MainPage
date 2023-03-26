import styles from './FrontPage.module.css';
import Indicator from '../../components/new/indicator/Indicator';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import React, { Suspense } from 'react';
import Loading from '../../components/new/Loading';

export default function FrontPage() {
  let timer;
  const location = useLocation();

  const FirstPage = React.lazy(() => import('./FirstPage'));
  const SecondPage = React.lazy(() => import('./SecondPage'));
  const AfterSec = React.lazy(() => import('./afterSecond'));
  const ThirdPage = React.lazy(() => import('./ThirdPage'));
  const FourthPage = React.lazy(() => import('./FourthPage'));

  const preventWheelEvent = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const NewWheelEvent = (e) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      if (e.deltaY > 0) {
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
      } else if (e.deltaY < 0) {
        window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
      }
    }, 300);
  };

  useEffect(() => {
    function wheelEvent() {
      window.addEventListener('wheel', (e) => preventWheelEvent(e), {
        passive: false
      });
      window.addEventListener('wheel', (e) => NewWheelEvent(e));
    }
    function checkState() {
      if (location.state) {
        let doc;
        console.log(location.state);
        switch (location.state) {
          case 1:
            doc = document.getElementById('second');
            doc.scrollIntoView();
            return;
          case 2:
            doc = document.getElementById('aftSec');
            doc.scrollIntoView();
            return;
          case 3:
            doc = document.getElementById('third');
            doc.scrollIntoView();
            return;
          case 4:
            doc = document.getElementById('fourth');
            doc.scrollIntoView();
            return;
          default:
            return;
        }
      }
    }

    wheelEvent();
    checkState();

    return () => {
      window.removeEventListener('wheel', (e) => preventWheelEvent(e), {
        passive: false
      });
      window.removeEventListener('wheel', (e) => NewWheelEvent(e));
      console.log('remove');
    };
  }, []);

  return (
    <div className={styles['frontpage']}>
      <Suspense fallback={<Loading />}>
        <Indicator type={true} />
        <FirstPage />
        <SecondPage />
        <AfterSec />
        <ThirdPage />
        <FourthPage />
      </Suspense>
    </div>
  );
}

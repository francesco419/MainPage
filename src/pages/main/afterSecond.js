import { useEffect, useRef, useState } from 'react';
import styles from './afterSec.module.css';
import { useOnScreen } from '../../hook/useOnScreen';
import { useDispatch } from 'react-redux';
import { changeSide } from '../../redux/SideSlide';
import SideMenu from '../../components/new/indicator/SideMenu';
import { ProjectDetailText } from '../../context/ProjectText.js';
import { useNavigate } from 'react-router-dom';
import Title from '../../components/new/title/title';

export default function AfterSec() {
  const dispatch = useDispatch();
  const ref = useRef();
  const screen = useOnScreen(ref);
  const [transitionPage, setTransitionPage] = useState(false);
  const chageState = () => {
    setTransitionPage((transitionPage) => !transitionPage);
  };
  useEffect(() => {
    if (screen === true) {
      dispatch(changeSide(2));
    }
  }, [screen]);
  return (
    <div id='aftSec' className={styles['aftSec']}>
      <SideMenu />
      <div className={styles['aftSec-right']}>
        <div className={styles['aftSec-box']}>
          <Title ref={ref} title='<SKILLS>' />
          <div className={styles['aftSec-section']}>
            <AfterElemet />
            <AfterElemet />
            <AfterElemet />
            <AfterElemet />
            <AfterElemet />
            <AfterElemet />
          </div>
        </div>
      </div>
    </div>
  );
}

function After() {
  return (
    <div>
      <AfterElemet />
      <AfterElemet />
      <AfterElemet />
    </div>
  );
}

function AfterElemet() {
  return (
    <div style={{ width: '20vw', height: '30vh', margin: '20px 20px' }}>
      <img
        src='https://picsum.photos/200/300'
        style={{ height: '15vh', objectFit: 'cover', margin: '0 auto' }}
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare
        volutpat fringilla. Curabitur vitae ultricies lectus, quis facilisis
        mauris. Nunc dictum volutpat nisl, eu fermentum tellus. Duis sem sapien,
        lobortis.
      </p>
    </div>
  );
}

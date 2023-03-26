import { useEffect, useRef, useState } from 'react';
import styles from './afterSec.module.css';
import { useOnScreen } from '../../hook/useOnScreen';
import { useDispatch } from 'react-redux';
import { changeSide } from '../../redux/SideSlide';
import SideMenu from '../../components/new/indicator/SideMenu';
import { ProjectDetailText } from '../../context/ProjectText.js';
import { useNavigate } from 'react-router-dom';

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
          <div className={styles['aftSec-title']} ref={ref}>
            <h2>{`<SKILLS/>`}</h2>
          </div>
          <div className={styles['aftSec-section']}></div>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useRef, useState } from 'react';
import styles from './afterSec.module.css';
import { useOnScreen } from '../../hook/useOnScreen';
import { useDispatch } from 'react-redux';
import { changeSide } from '../../redux/SideSlide';
import SideMenu from '../../components/new/indicator/SideMenu';
import { ProjectDetailText } from '../../context/ProjectText.js';
import { useNavigate } from 'react-router-dom';
import Title from '../../components/new/title/title';
import Skills from '../../components/new/skills/skills';

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
            <Skills num={0} />
            <Skills num={1} />
            <Skills num={2} />
            <Skills num={3} />
            <Skills num={4} />
            <Skills num={5} />
          </div>
        </div>
      </div>
    </div>
  );
}

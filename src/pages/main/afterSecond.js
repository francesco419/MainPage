import { useEffect, useRef } from 'react';
import styles from './afterSec.module.css';
import { useOnScreen } from '../../hook/useOnScreen';
import { useDispatch } from 'react-redux';
import { changeSide } from '../../redux/SideSlide';
import { Title } from '../../components/new/title/title';
import Skills from '../../components/new/skills/skills';
import { checkScreen } from '../../function/screen';

export default function AfterSec() {
  const dispatch = useDispatch();
  const ref = useRef();
  const screen = useOnScreen(ref);

  useEffect(() => {
    if (screen === true) {
      dispatch(changeSide(2));
    }
    checkScreen(2, screen, dispatch);
  }, [screen]);

  const titleStyle = {
    color: 'var(--color-white)',
    letterSpacing: '30px'
  };

  return (
    <div ref={ref} id='aftSec' className={styles['newSec']}>
      <div className={styles['newSec__title']}>
        <Title style={titleStyle} inputref={ref} title='<SKILLS>' />
        <hr style={{ width: '700px', margin: '30px auto' }} />
        <hr style={{ width: '400px', margin: '30px auto' }} />
      </div>
      <div className={styles['newSec__inner']}>
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
  );
}

function SKillset() {
  return (
    <div className={styles['skillSet']}>
      <div></div>
    </div>
  );
}

/**
 * <div id='aftSec' className={styles['aftSec']}>
      <SideMenu />
      <div className={styles['aftSec-right']}>
        <div className={styles['aftSec-box']}>
          <Title inputref={ref} title='<SKILLS>' />
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
    */

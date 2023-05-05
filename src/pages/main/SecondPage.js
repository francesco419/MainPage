import styles from './SecondPage.module.css';
import { useOnScreen } from '../../hook/useOnScreen';
import { useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { Title } from '../../components/new/title/title';
import { ReactComponent as Communiction } from '../../assets/image/communication.svg';
import { ReactComponent as Creativity } from '../../assets/image/creativity.svg';
import { ReactComponent as Growths } from '../../assets/image/growth.svg';
import { ReactComponent as System } from '../../assets/image/system.svg';
import { TEXTARRAY } from '../../context/ProjectText';
import { checkScreen } from '../../function/screen';

export default function SecondPage() {
  const dispatch = useDispatch();
  const ref = useRef();
  const screen = useOnScreen(ref);

  useEffect(() => {
    checkScreen(1, screen, dispatch);
  }, [screen]);

  const titleStyle = {
    color: 'var(--color-white)',
    letterSpacing: '30px'
  };

  return (
    <div id='second' className={styles['temp-sec']}>
      <div className={styles['temp-sec__upperBox']}>
        <Title style={titleStyle} inputref={ref} title='<ABOUT ME>' />
        <hr style={{ width: '700px', margin: '30px auto' }} />
        <hr style={{ width: '400px', margin: '30px auto' }} />
        <div className={styles['temp-sec__collection']}>
          <Box margin='right' svg={<Communiction />} />
          <Box margin='all' svg={<Creativity />} />
          <Box margin='all' svg={<Growths />} />
          <Box margin='left' svg={<System />} />
        </div>
      </div>
      <div className={styles['temp-sec__lowerBox']}>
        <Temp margin='right' text={TEXTARRAY[0]} title='<Communication>' />
        <Temp margin='all' text={TEXTARRAY[1]} title='< Creativity >' />
        <Temp margin='all' text={TEXTARRAY[2]} title='< Growths >' />
        <Temp margin='left' text={TEXTARRAY[3]} title='< Systematic >' />
      </div>
    </div>
  );
}

function Box({ svg, margin }) {
  const getMargin = (margin) => {
    switch (margin) {
      case 'right':
        return { marginRight: '3vw' };
      case 'left':
        return { marginLeft: '3vw' };
      case 'all':
        return { margin: '0 3vw' };
    }
  };

  const setMargin = getMargin(margin);

  return (
    <div style={setMargin} className={styles['temp-sec__box']}>
      {svg}
    </div>
  );
}

function Temp({ text, title, margin }) {
  const getMargin = (margin) => {
    switch (margin) {
      case 'right':
        return { marginRight: '3vw' };
      case 'left':
        return { marginLeft: '3vw' };
      case 'all':
        return { margin: '0 3vw' };
    }
  };

  const setMargin = getMargin(margin);

  return (
    <div style={setMargin} className={styles['temp-sec__textBox']}>
      <h3 className={styles['temp-sec__title']}>{title}</h3>
      {text.map((data) => {
        return <p>{data}</p>;
      })}
    </div>
  );
}

/* function ProgressSkill() {
  function ProgressBar({ height, id }) {
    return (
      <span className={styles['second-progress__item']} id={id}>
        <div
          className={styles['second-progress__block']}
          style={{ height: height }}
        ></div>
      </span>
    );
  }
  return (
    <div className={styles['second-progress']}>
      <ProgressBar height={'5vh'} id={'html'} />
      <ProgressBar height={'5vh'} id={'css'} />
      <ProgressBar height={'4vh'} id={'js'} />
      <ProgressBar height={'10vh'} id={'ts'} />
      <ProgressBar height={'8vh'} id={'scss'} />
      <ProgressBar height={'5vh'} id={'react'} />
      <ProgressBar height={'8vh'} id={'redux'} />
      <div className={styles['second-progress__absolute']}>
        <hr />
        <hr />
      </div>
      <div className={styles['second-progress__name']}>
        <p>HTML</p>
        <p>CSS</p>
        <p>JS</p>
        <p>TS</p>
        <p>SCSS</p>
        <p>REACT</p>
        <p>REDUX</p>
      </div>
    </div>
  );
} 

<div id='second' className={styles['secondpage']}>
<SideMenu />
      <div className={styles['secondpage-right']}>
        <div className={styles['secondpage-box']}>
          <Title inputref={ref} title='<ABOUT ME>' />
          <div className={styles['secondpage-section']}>
            <p className={styles['secondpage-section__p']}>{introduction}</p>
          </div>
          <div className={styles['secondpage-items']}>
            <MyComp
              svg={<Communiction />}
              name='< Communiction >'
              text={TEXTARRAY[0]}
            />
            <MyComp
              svg={<Creativity />}
              name='< Creativity >'
              text={TEXTARRAY[1]}
            />
            <MyComp svg={<Growths />} name='< Growths >' text={TEXTARRAY[2]} />
            <MyComp
              svg={<System />}
              name='< Systematic >'
              text={TEXTARRAY[3]}
            />
          </div>
        </div>
      </div>
</div>
*/

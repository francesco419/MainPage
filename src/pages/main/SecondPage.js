import styles from './SecondPage.module.css';
import SideMenu from '../../components/new/indicator/SideMenu';
import { useOnScreen } from '../../hook/useOnScreen';
import { useDispatch } from 'react-redux';
import { changeSide } from '../../redux/SideSlide';
import { useEffect, useRef } from 'react';
import { introduction } from '../../context/ProjectText';
import { Title } from '../../components/new/title/title';
import { ReactComponent as Communiction } from '../../assets/image/communication.svg';
import { ReactComponent as Creativity } from '../../assets/image/creativity.svg';
import { ReactComponent as Growths } from '../../assets/image/growth.svg';
import { ReactComponent as System } from '../../assets/image/system.svg';
import { TEXTARRAY } from '../../context/ProjectText';

const para = `덕트를 개발하여 사람들의 삶의 질을 높여 줄수 있는 개발자가 되고자 하며, 최고의 프로덕트를 위해 최고의 코드를 고민하며, 경험을 통해 성장하며 발전하고자 합니다. 무엇을? 덕트를 개발하여 사람들의 삶의 질을 높여 줄수 있는 개발자가 되고자 하며, 최고의 프로덕트를 위해 최고의 코드를 고민하며, 경험을 통해 성장하며 발전하고자 합니다. 무엇을`;

export default function SecondPage() {
  const dispatch = useDispatch();
  const ref = useRef();
  const screen = useOnScreen(ref);

  useEffect(() => {
    if (screen === true) {
      dispatch(changeSide(1));
      console.log(1);
    }
  }, [screen]);

  function Source({ svg, name, text }) {
    return (
      <div className={styles['secondpage-table']}>
        <div className={styles['secondpage-table_data']}>
          {svg}
          <p>{name}</p>
        </div>
        <ul className={styles['secondpage-table__list']}>
          {text.map((data) => {
            return (
              <li>
                <p>{data}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <div id='second' className={styles['secondpage']}>
      <SideMenu />
      <div className={styles['secondpage-right']}>
        <div className={styles['secondpage-box']}>
          <Title inputref={ref} title='<ABOUT ME>' />
          <div className={styles['secondpage-section']}>
            <p className={styles['secondpage-section__p']}>{introduction}</p>
          </div>
          <div className={styles['secondpage-items']}>
            <Source
              svg={<Communiction />}
              name='Communiction'
              text={TEXTARRAY[0]}
            />
            <Source
              svg={<Creativity />}
              name='Creativity'
              text={TEXTARRAY[1]}
            />
            <Source svg={<Growths />} name='Growths' text={TEXTARRAY[2]} />
            <Source svg={<System />} name='System' text={TEXTARRAY[3]} />
          </div>
        </div>
      </div>
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
} */

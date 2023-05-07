import { useEffect, useRef, useState } from 'react';
import styles from './ThirdPage.module.css';
import { useOnScreen } from '../../hook/useOnScreen';
import { useDispatch } from 'react-redux';
import { ProjectDetailText } from '../../context/ProjectText.js';
import { useNavigate } from 'react-router-dom';
import { Title } from '../../components/new/title/title';
import { ReactComponent as Porfolio } from '../../assets/image/projects/portfolio.svg';
import { ReactComponent as Sns } from '../../assets/image/projects/sns.svg';
import { ReactComponent as Travel } from '../../assets/image/projects/travel.svg';
import { ReactComponent as Youtube } from '../../assets/image/projects/youtube.svg';
import { checkScreen } from '../../function/screen';

export default function ThirdPage() {
  const dispatch = useDispatch();
  const ref = useRef();
  const screen = useOnScreen(ref);
  const [transitionPage, setTransitionPage] = useState(false);
  const chageState = () => {
    setTransitionPage((transitionPage) => !transitionPage);
  };
  useEffect(() => {
    checkScreen(3, screen, dispatch);
  }, [screen]);

  const titleStyle = {
    color: '#00000099',
    letterSpacing: '30px'
  };

  return (
    <div ref={ref} id='third' className={styles['thirdpage']}>
      <div className={styles['thirdpage-right']}>
        <div className={styles['thirdpage-section']} ref={ref}>
          {ProjectDetailText.map((data, index) => {
            if (index < 4) {
              return (
                <Project
                  props={data}
                  index={index}
                  chageState={chageState}
                  key={`project${index}`}
                />
              );
            }
          })}
        </div>
      </div>
      {transitionPage && <TransitionEffect />}
      {/* <div className={styles['background']}></div> */}
    </div>
  );
}

function TransitionEffect() {
  return <div className={styles['transiton-effect']}></div>;
}

function Project({ props, index, chageState }) {
  const nav = useNavigate();
  const PROJECT_SVG = [<Porfolio />, <Youtube />, <Travel />, <Sns />];
  const NUMBER_COLOR = ['#ffdf8f', '#a3cebd', '#fbc1ad', '#a88e7a'];
  return (
    <div
      className={styles['thirdpage-project']}
      onClick={() => {
        chageState();
        setTimeout(() => {
          nav(`/ProjectNav/${index}`);
        }, 2000);
      }}
    >
      <dl className={styles['thirdpage-description__list']}>
        <dt className={styles['thirdpage-description__term']}>
          <h1
            style={{ color: NUMBER_COLOR[index] }}
            className={styles['thirdpage-description__number']}
          >
            {props.id}
          </h1>
        </dt>
        <dd className={styles['thirdpage-description__description']}>
          <h2 className={styles['thirdpage-description__title']}>
            {props.name}
          </h2>
          <p className={styles['thirdpage-description__paragraph']}>
            {props.intro}
          </p>
          <div className={styles['thirdpage-description__svg']}>
            {PROJECT_SVG[index]}
          </div>
        </dd>
      </dl>
    </div>
  );
}

//Description

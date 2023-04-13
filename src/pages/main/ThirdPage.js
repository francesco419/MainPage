import { useEffect, useRef, useState } from 'react';
import styles from './ThirdPage.module.css';
import { useOnScreen } from '../../hook/useOnScreen';
import { useDispatch } from 'react-redux';
import { changeSide } from '../../redux/SideSlide';
import SideMenu from '../../components/new/indicator/SideMenu';
import { ProjectDetailText } from '../../context/ProjectText.js';
import { useNavigate } from 'react-router-dom';
import { Title } from '../../components/new/title/title';

export default function ThirdPage() {
  const dispatch = useDispatch();
  const ref = useRef();
  const screen = useOnScreen(ref);
  const [transitionPage, setTransitionPage] = useState(false);
  const chageState = () => {
    setTransitionPage((transitionPage) => !transitionPage);
  };
  useEffect(() => {
    if (screen === true) {
      dispatch(changeSide(3));
    }
  }, [screen]);

  return (
    <div id='third' className={styles['thirdpage']}>
      <SideMenu />
      <div className={styles['thirdpage-right']}>
        <div className={styles['thirdpage-box']}>
          <Title inputref={ref} title='<PROJECT>' />
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
      </div>
      {transitionPage && <TransitionEffect />}
    </div>
  );
}

function TransitionEffect() {
  return <div className={styles['transiton-effect']}></div>;
}

function Project({ props, index, chageState }) {
  const nav = useNavigate();
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
          <h1 className={styles['thirdpage-description__number']}>
            {props.id}
          </h1>
          <h2 className={styles['thirdpage-description__title']}>
            {props.name}
          </h2>
        </dt>
        <hr />
        <dd className={styles['thirdpage-description__description']}>
          <p className={styles['thirdpage-description__paragraph']}>
            {props.intro}
          </p>
        </dd>
      </dl>
    </div>
  );
}

//Description

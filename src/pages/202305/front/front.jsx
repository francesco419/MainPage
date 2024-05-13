import { useRef, useState } from 'react';
import styles from './front.module.css';
import Three from './frontThree';
import useInterval from 'use-interval';
import { ModelCar } from './Scene';
import { PoolBall } from './pollBall';
import { EightBall } from './eightBall';
import { Marine } from './marin';
import { Reaper } from './reap';
import ControlButton from './controlButton';

const damn = [
  <Three
    model={<ModelCar position={[0, -0.5, 0]} />}
    speed={2}
    lightType={true}
  />,
  <Three
    model={<EightBall position={[0, -2, 0]} />}
    speed={2}
    lightType={false}
  />,
  <Three
    model={<Reaper position={[0, -3, 0]} />}
    camera={[7, 0, 7]}
    speed={2}
    autoR={false}
    lightType={true}
  />
  /*  <Three model={<Marine position={[0, -2, 0]} />} speed={2} lightType={true} /> */
];

export default function Front() {
  const [swipe, setSwipe] = useState(0);
  const [mouseOver, setMouseOver] = useState(false);
  const ref = useRef();

  useInterval(() => {
    if (mouseOver) {
      return;
    }
    if (swipe < 2) setSwipe((swipe) => swipe + 1);
    else if (swipe === damn.length - 1) setSwipe((swipe) => 0);
  }, 4000);

  const changeMouseEnter = () => {
    setMouseOver((mouseOver) => true);
  };

  const changeMouseLeave = () => {
    setMouseOver((mouseOver) => false);
  };

  const swipeHandler = (number) => {
    setSwipe((swipe) => number);
  };

  return (
    <div
      className={styles['front']}
      onMouseEnter={changeMouseEnter}
      onMouseLeave={changeMouseLeave}
    >
      <ControlButton swipe={swipe} swipeHandler={swipeHandler} />
      <div
        id='po'
        ref={ref}
        className={styles['front_cover']}
        style={{ width: '3600px', transform: `translateX(${-swipe * 1200}px)` }}
      >
        {damn}
      </div>
      {/* <img src={front} /> */}
      {/*  //src='https://picsum.photos/1200/600' /> */}
    </div>
  );
}

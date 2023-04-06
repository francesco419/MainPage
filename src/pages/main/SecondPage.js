import styles from './SecondPage.module.css';
import SideMenu from '../../components/new/indicator/SideMenu';
import { useOnScreen } from '../../hook/useOnScreen';
import { useDispatch } from 'react-redux';
import { changeSide } from '../../redux/SideSlide';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { introduction } from '../../context/ProjectText';
import DropSection from '../../components/new/dragdrop/dropSection';
import Title from '../../components/new/title/title';
import DragTarget from '../../components/new/dragdrop/dragTarget';
import { ReactComponent as Communiction } from '../../assets/image/communication.svg';
import { ReactComponent as Creativity } from '../../assets/image/creativity.svg';
import { ReactComponent as Growths } from '../../assets/image/growth.svg';
import { ReactComponent as System } from '../../assets/image/system.svg';

export default function SecondPage() {
  const dispatch = useDispatch();
  const ref = useRef();
  const screen = useOnScreen(ref);
  const ability = [
    'React 라이브러리를 사용한 SPA 개발 능력',
    'TypeScript의 정적 타입 코드 작성 및 타입 오류 문제해결 능력',
    'Redux Toolkit을 적용해 프로젝트의 효율적인 전역 상태 관리 능력',
    'SCSS, CSS Module의 장점을 이해한 스타일 시트 작성 능력',
    'Git을 통한 프로젝트 관리 경험'
  ];

  /* const name =
    '안녕하세요 저는 사람들에게 멋진 가치를 제공 하는 것을 추구하는 개발자 이상현입니다.';

  const introduction =
    '실제 누구나 사용하는 프로덕트를 개발하여 사람들의 삶의 질을 높여 줄수 있는 개발자가 되고자 하며, 최고의 프로덕트를 위해 최고의 코드를 고민하며, 경험을 통해 성장하며 발전하고자 합니다. \n무엇을? 왜? 어떻게? 라는 프로세스를 통해 문제해결에 대해 자신만의 차별화된 솔루션을 만들고자 하며, 이를위해 새로운 기술을 적극 활용하고 다양한 경험을 쌓아 폭넓은 사고를 보유하고자 합니다.';
 */
  useEffect(() => {
    if (screen === true) {
      dispatch(changeSide(1));
      console.log(1);
    }
  }, [screen]);

  function Target({ svg, name }) {
    return (
      <div className={styles['secondpage-table_data']}>
        {svg}
        <p>{name}</p>
      </div>
    );
  }

  function Source(svg, name, text) {
    return (
      <div className={styles['secondpage-TEMP']}>
        <Target svg={<Communiction />} name='Communiction' />
        <p>{text}</p>
      </div>
    );
  }

  return (
    <div id='second' className={styles['secondpage']}>
      <SideMenu />
      <div className={styles['secondpage-right']}>
        <div className={styles['secondpage-box']}>
          <Title ref={ref} title='<ABOUT ME>' />
          <div className={styles['secondpage-section']}>
            <p>{introduction}</p>
          </div>
          <div className={styles['secondpage-items']}>
            <div className={styles['secondpage-TEMP']}>
              <Target svg={<Communiction />} name='Communiction' />
              <p>
                덕트를 개발하여 사람들의 삶의 질을 높여 줄수 있는 개발자가
                되고자 하며, 최고의 프로덕트를 위해 최고의 코드를 고민하며,
                경험을 통해 성장하며 발전하고자 합니다. \n무엇을? 덕트를
                개발하여 사람들의 삶의 질을 높여 줄수 있는 개발자가 되고자 하며,
                최고의 프로덕트를 위해 최고의 코드를 고민하며, 경험을 통해
                성장하며 발전하고자 합니다. \n무엇을?
              </p>
            </div>
            <div className={styles['secondpage-TEMP']}>
              <Target svg={<Creativity />} name='Creativity' />
              <p>
                덕트를 개발하여 사람들의 삶의 질을 높여 줄수 있는 개발자가
                되고자 하며, 최고의 프로덕트를 위해 최고의 코드를 고민하며,
                경험을 통해 성장하며 발전하고자 합니다. \n무엇을? 덕트를
                개발하여 사람들의 삶의 질을 높여 줄수 있는 개발자가 되고자 하며,
                최고의 프로덕트를 위해 최고의 코드를 고민하며, 경험을 통해
                성장하며 발전하고자 합니다. \n무엇을?
              </p>
            </div>
            <div className={styles['secondpage-TEMP']}>
              <Target svg={<Growths />} name='Growths' />
              <p>
                덕트를 개발하여 사람들의 삶의 질을 높여 줄수 있는 개발자가
                되고자 하며, 최고의 프로덕트를 위해 최고의 코드를 고민하며,
                경험을 통해 성장하며 발전하고자 합니다. \n무엇을? 덕트를
                개발하여 사람들의 삶의 질을 높여 줄수 있는 개발자가 되고자 하며,
                최고의 프로덕트를 위해 최고의 코드를 고민하며, 경험을 통해
                성장하며 발전하고자 합니다. \n무엇을?
              </p>
            </div>
            <div className={styles['secondpage-TEMP']}>
              <Target svg={<System />} name='System' />
              <p>
                덕트를 개발하여 사람들의 삶의 질을 높여 줄수 있는 개발자가
                되고자 하며, 최고의 프로덕트를 위해 최고의 코드를 고민하며,
                경험을 통해 성장하며 발전하고자 합니다. \n무엇을? 덕트를
                개발하여 사람들의 삶의 질을 높여 줄수 있는 개발자가 되고자 하며,
                최고의 프로덕트를 위해 최고의 코드를 고민하며, 경험을 통해
                성장하며 발전하고자 합니다. \n무엇을?
              </p>
            </div>
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

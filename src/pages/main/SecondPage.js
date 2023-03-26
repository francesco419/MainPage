import styles from './SecondPage.module.css';
import { ReactComponent as Communiction } from '../../assets/image/communication.svg';
import { ReactComponent as Creativity } from '../../assets/image/creativity.svg';
import { ReactComponent as Growths } from '../../assets/image/growth.svg';
import { ReactComponent as System } from '../../assets/image/system.svg';
import SideMenu from '../../components/new/indicator/SideMenu';
import { useOnScreen } from '../../hook/useOnScreen';
import { useDispatch } from 'react-redux';
import { changeSide } from '../../redux/SideSlide';
import { useEffect, useRef } from 'react';

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

  const introduction =
    '사람들에게 멋진 가치를 제공 하는 것을 추구하는 개발자 이상현입니다. \n실제 누구나 사용하는 프로덕트를 개발하여 사람들의 삶의 질을 높여 줄수 있는 개발자가 되고자 합니다. \n최고의 프로덕트를 위해 최고의 코드를 고민하며, 경험을 통해 성장하며 발전하고자 합니다.';

  useEffect(() => {
    if (screen === true) {
      dispatch(changeSide(1));
      console.log(1);
    }
  }, [screen]);

  function AbilityBlock({ svg, name }) {
    return (
      <td className={styles['secondpage-table_data']}>
        {svg}
        <p>{name}</p>
      </td>
    );
  }

  function AbilityText() {
    return <div className={styles['secondpage-description']}></div>;
  }

  return (
    <div id='second' className={styles['secondpage']}>
      <SideMenu />
      <div className={styles['secondpage-right']}>
        <div className={styles['secondpage-box']}>
          <div className={styles['secondpage-title']} ref={ref}>
            <h2>{`<ABOUT ME/>`}</h2>
          </div>
          <div className={styles['secondpage-section']}>
            <div className={styles['secondpage-intro']}>
              <pre className={styles['paragh']}>{introduction}</pre>
            </div>
            <div className={styles['secondpage-detail']}>
              <table>
                <tbody>
                  <tr>
                    <AbilityBlock
                      svg={<Communiction />}
                      name={`<Communication>`}
                    />
                    <AbilityBlock svg={<Creativity />} name={`<Creativity>`} />
                  </tr>
                  <tr>
                    <AbilityBlock svg={<Growths />} name={`<Growths>`} />
                    <AbilityBlock svg={<System />} name={`<Systematic>`} />
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgressSkill() {
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

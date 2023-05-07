import { useEffect, useRef, useState } from 'react';
import styles from './afterSec.module.css';
import { useOnScreen } from '../../hook/useOnScreen';
import { useDispatch } from 'react-redux';
import { changeSide } from '../../redux/SideSlide';
import { checkScreen } from '../../function/screen';
import { ReactComponent as CSS } from '../../assets/image/skills/css.svg';
import { ReactComponent as HTML } from '../../assets/image/skills/html.svg';
import { ReactComponent as JS } from '../../assets/image/skills/js.svg';
import { ReactComponent as REACT } from '../../assets/image/skills/react.svg';
import { ReactComponent as REDUX } from '../../assets/image/skills/redux.svg';
import { ReactComponent as SCSS } from '../../assets/image/skills/scss.svg';
import { ReactComponent as TYPE } from '../../assets/image/skills/type.svg';
import { useNavigate } from 'react-router-dom';

export default function AfterSec() {
  const dispatch = useDispatch();
  const refs = useRef();
  const ref = useRef();
  const nav = useNavigate();
  const screen = useOnScreen(ref);
  const [type, setType] = useState(0);

  useEffect(() => {
    if (screen === true) {
      dispatch(changeSide(2));
    }
    checkScreen(2, screen, dispatch);
  }, [screen]);

  const setArray = [
    {
      title: 'BASICS',
      svg: [<JS />, <HTML />, <CSS />],
      text: [
        '기본이라고 할 수 있는 HTML/CSS를 자유자재로 구현할 수 있습니다.',
        'ES6 이후의 JS를 사용하는것에 능숙합니다.',
        '프로덕트에 요구되는 적절한 애니메이션을 Keyframe / Transition 등을 통해 구현할 수 있습니다.'
      ]
    },
    {
      title: 'LIBRARIES',
      svg: [<REACT />, <REDUX />],
      text: [
        `함수형 컴포넌트 형태의 작성을 선호합니다.`,
        '라이프 사이클을 이해하여 최적의 랜더링을 통한 최고의 프로덕트를 만들고자 합니다.',
        'Redux를 사용하여 props 복잡도를 해결하고, 스토어를 통한 프로젝트의 효율적인 상태관리를 할 수 있습니다.'
      ]
    },
    {
      title: 'SCIPRT',
      svg: [<TYPE />, <SCSS />],
      text: [
        '변수/ 중첩/ 함수 등의 문법을 적절히 사용하여 기존 CSS를 구조화한 형태로 표현할 수 있습니다.',
        `정적코드작성 및 타입오류로 인한 에러의 문제해결이 가능합니다.`,
        'TS로 인해 코드량이 많아지고 복잡해지나, 유지보수 및 코드 퀄리티에서의 장점또한 이해하고 있습니다.'
      ]
    }
  ];

  const listButton = ['BASICS', 'LIBRARIES', 'SCRIPT'];

  const typeHandler = (count) => {
    refs.current.setAttribute('class', styles['fadeOut']);
    setTimeout(() => {
      setType((type) => count);
    }, 1000);
  };

  return (
    <div ref={ref} id='aftSec' className={styles['port-skills']}>
      <div className={styles['port-skills-section']}>
        <p className={styles['port-skills-title']}>SKILLS</p>
        <SkillSet
          refs={refs}
          svg={setArray[type].svg}
          text={setArray[type].text}
          title={setArray[type].title}
          key={setArray[type].title}
        />
        <div className={styles['port-skills-list']}>
          {listButton.map((data, index) => {
            return (
              <button onClick={() => typeHandler(index)} key={data}>
                {data}
              </button>
            );
          })}
        </div>
        <button
          className={styles['port-skills-button']}
          onClick={() => {
            nav('/third');
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

function SkillSet({ svg, text, title, refs }) {
  return (
    <div className={styles['port-skills-set']} ref={refs}>
      <p className={styles['port-skills-p']}>{title}</p>
      <div className={styles['port-skills-pic']}>{svg}</div>
      <div className={styles['port-skills-text']}>
        {text.map((data, index) => {
          return <p key={`key_${index}`}>{data}</p>;
        })}
      </div>
    </div>
  );
}

import { useState } from 'react';
import styles from './new.module.css';
import DetailSkill from './detailSkill';

export default function SkillBox({ name, svg, index }) {
  const [click, setClick] = useState(false);
  const changeClick = () => {
    setClick((click) => !click);
  };

  const setStyleByIndex = (index) => {
    return {
      left: index % 4 === 0 ? null : 0,
      bottom: index > 12 ? 0 : null,
      top: index <= 12 ? 0 : null
    };
  };

  return (
    <div className={`${styles['skill_content']}`} onClick={changeClick}>
      {svg}
      <p className={styles['skill_content-name']}>{name}</p>
      {click && (
        <div
          className={`${styles['skill_content-absolute']}`}
          style={setStyleByIndex(index)}
          onClick={(event) => {
            changeClick();
            event.stopPropagation(); //버블링으로 인한 부모의 changeClick이벤트 발생 방지
          }}
        >
          <div className={styles['skill_moveSvg']}>{svg}</div>
          <DetailSkill name={name} />
        </div>
      )}
    </div>
  );
}

//html,css,css Module,sass, js,ts,redux,react,git,github,aws,Lodash

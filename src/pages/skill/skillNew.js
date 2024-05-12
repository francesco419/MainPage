import { useState, useEffect } from 'react';
import styles from './new.module.css';
import DetailSkill from './detailSkill';
import { motion } from 'framer-motion';

export default function SkillBox({ name, svg, index, handler, node }) {
  const [click, setClick] = useState(false);
  /*   const ref = useRef(null);
  const isInView = useInView(ref); */

  const changeClick = () => {
    if (!click) {
      handler(name);
    }
    setClick((click) => !click);
  };

  useEffect(() => {
    if (node !== name && click) {
      changeClick();
    }
  }, [node]);

  const setStyleByIndex = (index) => {
    return {
      left: index % 4 === 0 ? null : 0,
      bottom: index > 12 ? 0 : null,
      top: index <= 12 ? 0 : null
    };
  };

  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={{
        hidden: { scale: 0 },
        visible: { scale: 1 }
      }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20
      }}
      className={`${styles['skill_content']}`}
      onClick={changeClick}
    >
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
    </motion.div>
  );
}

//html,css,css Module,sass, js,ts,redux,react,git,github,aws,Lodash

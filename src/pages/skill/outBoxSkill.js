import styles from './skills.module.css';
import SkillBox from './skillNew';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import Aos from 'aos';

export default function OutBoxSkill({ skillContents }) {
  const [node, setNode] = useState(null);

  const nodeHandler = (nodeName) => {
    setNode((node) => nodeName);
  };

  return (
    <div className={styles['skill_section']}>
      <p className={styles['skill_title']}>SKILL</p>
      <div className={styles['skill_cardBox']}>
        {_.map(skillContents, (o, index) => {
          return (
            <SkillBox
              name={o.name}
              svg={o.svg}
              index={index + 1}
              key={o.name}
              handler={nodeHandler}
              node={node}
            />
          );
        })}
      </div>
    </div>
  );
}

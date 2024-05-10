import styles from './detail.module.css';
import { skillDescription } from '../../context/SKillText';
import _ from 'lodash';

export default function DetailSkill({ name }) {
  const description = _.filter(skillDescription, { name: name });

  console.log(name, description);
  return (
    <div className={styles['skill_detail']}>
      <h2>{name}</h2>
      <p>{description[0] ? description[0].description : null}</p>
    </div>
  );
}

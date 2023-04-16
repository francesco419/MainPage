import styles from './skills.module.css';
import { SKILLINFORMATION } from '../../../context/SKillText';

export default function KeyOn({ index }) {
  return (
    <div className={styles['skills-svg']}>
      {SKILLINFORMATION[index].svg.map((data) => {
        return data;
      })}
    </div>
  );
}

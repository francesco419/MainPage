import styles from './skills.module.css';
import { SKILLINFORMATION } from '../../../context/SKillText';

export default function Skills({ num = 0 }) {
  return (
    <div className={styles['skills']}>
      <div className={styles['skills__svgBOx']}>
        {SKILLINFORMATION[num].svg.map((data) => {
          return data;
        })}
      </div>
      <p className={styles['skills__name']}>{SKILLINFORMATION[num].name}</p>
      <ul className={styles['skills__ul']}>
        {SKILLINFORMATION[num].text.map((data) => {
          return (
            <li className={styles['skills__li']}>
              <p>{data}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

import styles from './skills.module.css';
import { ReactComponent as CSS } from '../../../assets/image/skills/css.svg';
import { ReactComponent as HTML } from '../../../assets/image/skills/html.svg';
import { ReactComponent as JS } from '../../../assets/image/skills/js.svg';
import { ReactComponent as REACT } from '../../../assets/image/skills/react.svg';
import { ReactComponent as REDUX } from '../../../assets/image/skills/redux.svg';
import { ReactComponent as SCSS } from '../../../assets/image/skills/scss.svg';
import { ReactComponent as TYPE } from '../../../assets/image/skills/type.svg';

const SKILLINFORMATION = [
  {
    no: 0,
    svg: [<CSS />, <HTML />],
    name: 'CSS HTML',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare
        volutpat fringilla. Curabitur vitae ultricies lectus, quis facilisis
        mauris. Nunc dictum volutpat nisl, eu fermentum tellus. Duis sem sapien,
        lobortis.`
  },
  {
    no: 1,
    svg: [<JS />],
    name: 'JAVASCRIPT',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare
        volutpat fringilla. Curabitur vitae ultricies lectus, quis facilisis
        mauris. Nunc dictum volutpat nisl, eu fermentum tellus. Duis sem sapien,
        lobortis.`
  },
  {
    no: 2,
    svg: [<REACT />],
    name: 'REACT',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare
        volutpat fringilla. Curabitur vitae ultricies lectus, quis facilisis
        mauris. Nunc dictum volutpat nisl, eu fermentum tellus. Duis sem sapien,
        lobortis.`
  },
  {
    no: 3,
    svg: [<REDUX />],
    name: 'REDUX',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare
        volutpat fringilla. Curabitur vitae ultricies lectus, quis facilisis
        mauris. Nunc dictum volutpat nisl, eu fermentum tellus. Duis sem sapien,
        lobortis.`
  },
  {
    no: 4,
    svg: [<SCSS />],
    name: 'SCSS',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare
        volutpat fringilla. Curabitur vitae ultricies lectus, quis facilisis
        mauris. Nunc dictum volutpat nisl, eu fermentum tellus. Duis sem sapien,
        lobortis.`
  },
  {
    no: 5,
    svg: [<TYPE />],
    name: 'TYPESCRIPT',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare
        volutpat fringilla. Curabitur vitae ultricies lectus, quis facilisis
        mauris. Nunc dictum volutpat nisl, eu fermentum tellus. Duis sem sapien,
        lobortis.`
  }
];

export default function Skills({ num = 0 }) {
  return (
    <div className={styles['skills']}>
      <div className={styles['skills__svgBOx']}>
        {SKILLINFORMATION[num].svg.map((data) => {
          return data;
        })}
      </div>
      <p className={styles['skills__name']}>{SKILLINFORMATION[num].name}</p>
      <p className={styles['skills__detail']}>{SKILLINFORMATION[num].text}</p>
    </div>
  );
}

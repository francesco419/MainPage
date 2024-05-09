import { Link } from 'react-router-dom';
import styles from './project.module.css';
import Aos from 'aos';
import { useEffect } from 'react';
import { ReactComponent as Open } from '../../assets/svg/open.svg';

export default function Project({ projects, num }) {
  return (
    <div className={styles['hidden-project-index']}>
      <img src={projects.img} />
      <div className={`${styles['hidden-project-front']} ${styles['topleft']}`}>
        <div
          style={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'space-between'
          }}
        >
          <p>{projects.name}</p>
          <Open />
        </div>
        <p>{projects.text}</p>
        <Link to={`/project/${projects.to}`} className={styles['topleft']} />
      </div>
    </div>
  );
}

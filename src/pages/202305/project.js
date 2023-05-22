import { Link } from 'react-router-dom';
import styles from './project.module.css';
import Aos from 'aos';
import { useEffect } from 'react';

export default function Project({ projects }) {
  return (
    <div className={styles['hidden-project-index']}>
      <img src={projects.img} />
      <div className={`${styles['hidden-project-front']} ${styles['topleft']}`}>
        <p>{projects.name}</p>
        <p>{projects.text}</p>
        <Link to={`/project/${projects.to}`} className={styles['topleft']} />
      </div>
    </div>
  );
}

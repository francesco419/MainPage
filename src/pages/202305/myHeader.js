import styles from './myHeader.module.css';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ProjectDetailText } from '../../context/ProjectText';

export default function MyHeader({ refer }) {
  const nav = useNavigate();

  const onClickHandler = (ref) => {
    window.scrollTo(0, ref.current.offsetTop);
  };

  if (refer === null) {
    return (
      <div className={styles['hidden-header']}>
        <button onClick={() => nav(`/`)}>MAIN</button>
        <button className={styles['hidden-header-project']}>
          PROJECT
          <div className={styles['hidden-header-link']}>
            {ProjectDetailText.map((o) => {
              if (o.show === true)
                return <Link to={`/project/${o.param}`}>{o.name}</Link>;
            })}
          </div>
        </button>
      </div>
    );
  } else {
    return (
      <div className={styles['hidden-header']}>
        <button onClick={() => onClickHandler(refer.about)}>ABOUT</button>
        <button onClick={() => onClickHandler(refer.skill)}>SKILL</button>
        <button
          className={styles['hidden-header-project']}
          onClick={() => onClickHandler(refer.project)}
        >
          PROJECT
          <div className={styles['hidden-header-link']}>
            {ProjectDetailText.map((o) => {
              if (o.show === true)
                return <Link to={`/project/${o.param}`}>{o.name}</Link>;
            })}
          </div>
        </button>
        <button onClick={() => onClickHandler(refer.contact)}>CONTACT</button>
      </div>
    );
  }
}

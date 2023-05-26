import styles from './myHeader.module.css';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
            <Link to={`/project/MainPage`}>Porfolio</Link>
            <Link to={`/project/Youtube`}>YouTube Clone</Link>
            <Link to={`/project/Travel`}>Travel Away</Link>
            <Link to={`/project/post_typescript_redux`}>Social Network</Link>
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
            <Link to={`/project/MainPage`}>Porfolio</Link>
            <Link to={`/project/Youtube`}>YouTube Clone</Link>
            <Link to={`/project/Travel`}>Travel Away</Link>
            <Link to={`/project/post_typescript_redux`}>Social Network</Link>
          </div>
        </button>
        <button onClick={() => onClickHandler(refer.contact)}>CONTACT</button>
      </div>
    );
  }
}

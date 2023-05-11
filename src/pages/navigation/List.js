import styles from './List.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function () {
  const [showProject, setShowProject] = useState(false);
  const nav = useNavigate();

  const moveBackground = (e) => {
    const doc = document.getElementById('movepoint');
    doc.style.height = `${e.target.offsetHeight + 10}px`;
    doc.style.width = `${e.target.offsetWidth + 20}px`;
    doc.style.left = `${e.target.offsetLeft - 10}px`;
    doc.style.top = `${e.target.offsetTop - 10}px`;
  };

  function ListItem({ num, name }) {
    return (
      <li
        className={styles['listpage-project__item']}
        onMouseOver={(e) => moveBackground(e)}
      >
        <Link
          className={styles['listpage-project__link']}
          to={`/ProjectNav/${num}`}
        >
          {name}
        </Link>
      </li>
    );
  }

  return (
    <div className={styles['listpage']}>
      {/*       <button
        className={styles['listpage__button']}
        onClick={() => {
          const doc = document.getElementById('line');
          doc.style.display = 'inline';
          setTimeout(() => {
            doc.style.display = 'none';
            nav(`/MainPage`);
          }, 1500);
        }}
      >{`<`}</button> */}
      <div className={styles['listpage-box']}>
        <div className={styles['listpage-menu']}>
          <Link
            className={styles['listpage-menu__link']}
            to={`${process.env.PUBLIC_URL}`}
          >
            HOME
          </Link>
          <Link className={styles['listpage-menu__link']} to={'/intro'}>
            INTRODUCTION
          </Link>
          <Link className={styles['listpage-menu__link']} to={`/sec`}>
            ABOUT ME
          </Link>
          <Link className={styles['listpage-menu__link']} to={`/asec`}>
            SKILLS
          </Link>
          <button
            className={styles['listpage-menu__button']}
            onClick={() => {
              const doc = document.getElementById('proList');
              if (doc.style.display === '' || doc.style.display === 'none') {
                doc.style.display = 'flex';
              } else {
                doc.style.display = 'none';
              }
              //setShowProject((showProject) => !showProject);
            }}
          >
            PROJECT
          </button>
          <ul id='proList' className={styles['listpage-project__list']}>
            <li
              className={styles['listpage-project__item']}
              id='movepoint'
            ></li>
            <li
              className={styles['listpage-project__item']}
              onMouseOver={(e) => moveBackground(e)}
            >
              <Link className={styles['listpage-project__link']} to={`/third`}>
                Main
              </Link>
            </li>
            <ListItem num={0} name={'Portfolio'} />
            <ListItem num={1} name={'Youtube'} />
            <ListItem num={2} name={'Travel'} />
            <ListItem num={3} name={'SNS'} />
          </ul>
          <Link className={styles['listpage-menu__link']} to={`/fourth`}>
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
}

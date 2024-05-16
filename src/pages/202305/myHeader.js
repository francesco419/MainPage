import styles from './myHeader.module.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ProjectDetailText } from '../../context/ProjectText';
import _ from 'lodash';

export default function MyHeader({ refer }) {
  const nav = useNavigate();

  const onClickHandler = (ref) => {
    window.scrollTo(0, ref.current.offsetTop);
  };

  if (refer === null) {
    return (
      <header className={styles['hidden-header']}>
        <button onClick={() => nav(`/`)}>MAIN</button>
        <button className={styles['hidden-header-project']}>
          PROJECT
          <div className={styles['hidden-header-link']}>
            {_.reverse(ProjectDetailText).map((o) => {
              if (o.show === true)
                return (
                  <Link to={`/project/${o.param}`} key={o.name}>
                    {o.name}
                  </Link>
                );
            })}
          </div>
        </button>
      </header>
    );
  } else {
    return (
      <header className={styles['hidden-header']}>
        <button onClick={() => onClickHandler(refer.about)}>ABOUT</button>
        <button onClick={() => onClickHandler(refer.skill)}>SKILL</button>
        <button
          className={styles['hidden-header-project']}
          onClick={() => onClickHandler(refer.project)}
        >
          PROJECT
          <div className={styles['hidden-header-link']}>
            {_.reverse(ProjectDetailText).map((o) => {
              if (o.show === true)
                return (
                  <Link to={`/project/${o.param}`} key={o.name}>
                    {o.name}
                  </Link>
                );
            })}
          </div>
        </button>
        <button onClick={() => onClickHandler(refer.contact)}>CONTACT</button>
      </header>
    );
  }
}

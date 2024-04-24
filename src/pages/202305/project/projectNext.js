import styles from './projectPage.module.css';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Right } from '../../../assets/svg/right.svg';
import { ReactComponent as Left } from '../../../assets/svg/left.svg';
import { useEffect, useRef } from 'react';

export default function ProjectNext({ project }) {
  const nav = useNavigate();
  const refLeft = useRef();
  const refRight = useRef();
  const container = useRef();

  useEffect(() => {
    moveIndicator();
    return () => {
      moveIndicator();
    };
  }, []);

  const moveIndicator = () => {
    window.addEventListener('scroll', (e) => {
      container.current.style.top = `${
        window.scrollY + document.documentElement.clientHeight / 2
      }px`;
    });
  };

  const prevHandler = () => {
    if (project.prev) {
      nav(`/project/${project.prev}`);
    }
  };

  const nextHandler = () => {
    if (project.next) {
      nav(`/project/${project.next}`);
    }
  };

  return (
    <div className={styles['my-project-next']} ref={container}>
      <div>
        <Left />
        <button
          style={{
            opacity: project.prev ? '0.8' : '0.1',
            cursor: project.prev ? 'pointer' : 'not-allowed'
          }}
          onClick={prevHandler}
          ref={refLeft}
        >
          Prev
        </button>
      </div>
      <div>
        <button
          style={{
            opacity: project.next ? '0.8' : '0.1',
            cursor: project.next ? 'pointer' : 'not-allowed'
          }}
          onClick={nextHandler}
          ref={refRight}
        >
          Next
        </button>
        <Right />
      </div>
    </div>
  );
}

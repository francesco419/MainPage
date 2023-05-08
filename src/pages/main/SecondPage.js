import styles from './SecondPage.module.css';
import { useOnScreen } from '../../hook/useOnScreen';
import { useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { ReactComponent as Communiction } from '../../assets/image/communication.svg';
import { ReactComponent as Creativity } from '../../assets/image/creativity.svg';
import { ReactComponent as Growths } from '../../assets/image/growth.svg';
import { TEXTARRAY } from '../../context/ProjectText';
import { checkScreen } from '../../function/screen';
import { useNavigate } from 'react-router-dom';

export default function SecondPage() {
  const dispatch = useDispatch();
  const ref = useRef();
  const screen = useOnScreen(ref);
  const nav = useNavigate();

  useEffect(() => {
    checkScreen(2, screen, dispatch);
  }, [screen]);

  const box = [
    [<Pack svg={<Communiction />} title='Communication' text={TEXTARRAY[0]} />],
    [<Pack svg={<Creativity />} text={TEXTARRAY[1]} title='Creativity' />],
    [<Pack svg={<Growths />} text={TEXTARRAY[2]} title='Growths' />]
  ];

  return (
    <div id='second' ref={ref} className={styles['temp-sec']}>
      <div className={styles['temp-sec__collection']}>
        <p className={styles['temp-sec-title']}>ABOUT ME</p>
        <div className={styles['temp-sec-inner']}>
          {box.map((data, index) => {
            return <div key={`second_${index}`}>{data}</div>;
          })}
        </div>
        <button
          className={styles['temp-sec-button']}
          onClick={() => {
            nav('/asec');
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

//CDBCAB

/**----------------------------------------- */

function Pack({ svg, title, text }) {
  return (
    <div className={styles['temp-sec-pack']}>
      <div className={styles['temp-sec__box']}>{svg}</div>
      <div className={styles['temp-sec__textBox']}>
        <h3 className={styles['temp-sec__title']}>{title}</h3>
        {text.map((data, index) => {
          return (
            <div key={`${title}_${index}`}>
              <p>{data}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

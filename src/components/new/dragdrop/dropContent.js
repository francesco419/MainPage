import styles from './drop.module.css';
import DragTarget from './dragTarget';
import { ReactComponent as Communiction } from '../../../assets/image/communication.svg';
import { ReactComponent as Creativity } from '../../../assets/image/creativity.svg';
import { ReactComponent as Growths } from '../../../assets/image/growth.svg';
import { ReactComponent as System } from '../../../assets/image/system.svg';
import { useEffect, useState } from 'react';
import {
  DRAGTEXT,
  DRAGCOMP,
  name,
  introduction
} from '../../../context/ProjectText';

export default function DropContent({ data }) {
  useEffect(() => {}, [data]);

  const target = [
    <DragTarget
      svg={<Communiction />}
      name={`<Communication>`}
      id='communication'
    />,
    <DragTarget svg={<Creativity />} name={`<Creativity>`} id='create' />,
    <DragTarget svg={<Growths />} name={`<Growths>`} id='growth' />,
    <DragTarget svg={<System />} name={`<Systematic>`} id='system' />
  ];

  const setElement = (text, num) => {
    return (
      <div className={styles['drop_element']} key={text}>
        <div className={styles['drop_text']}>
          <div className={styles['drop_text_svg']}>{target[num]}</div>
          <ul>
            {DRAGTEXT[num].map((data) => {
              return (
                <li>
                  <p>{data}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles['drop_info']}>{DRAGCOMP[num]}</div>
      </div>
    );
  };

  const defaultElement = (text) => {
    return (
      <div className={styles['drop_extend']}>
        <p>{name}</p>
        <p>{introduction}</p>
      </div>
    );
  };

  switch (data) {
    case 'commu':
      return setElement('cm', 0);
    case 'creat':
      return setElement('ct', 1);
    case 'grow':
      return setElement('gt', 2);
    case 'sys':
      return setElement('st', 3);
    case 'def':
      return defaultElement(data);
    default:
      return defaultElement(data);
  }
}

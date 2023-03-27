import { ReactComponent as Communiction } from '../../../assets/image/communication.svg';
import { ReactComponent as Creativity } from '../../../assets/image/creativity.svg';
import { ReactComponent as Growths } from '../../../assets/image/growth.svg';
import { ReactComponent as System } from '../../../assets/image/system.svg';
import { useEffect, useRef, useState } from 'react';
import DropContent from './dropContent';
import styles from '../../../pages/main/SecondPage.module.css';
import DropBox from './dropBox';

export default function DropSection() {
  const dragStartHandler = (e, id) => {
    console.log('drag start');
    e.dataTransfer.setData('text', id);
  };
  const dragHandler = () => {
    console.log('drag');
  };

  function AbilityBlock({ svg, name, id }) {
    return (
      <div
        id={id}
        className={styles['secondpage-table_data']}
        draggable
        onDragStart={(e) => dragStartHandler(e, id)}
        onDrag={dragHandler}
      >
        {svg}
        <p>{name}</p>
      </div>
    );
  }

  return (
    <div className={styles['secondpage-section']}>
      <div className={styles['secondpage-detail']}>
        <AbilityBlock
          svg={<Communiction />}
          name={`<Communication>`}
          id='communication'
        />
        <AbilityBlock svg={<Creativity />} name={`<Creativity>`} id='create' />
        <AbilityBlock svg={<Growths />} name={`<Growths>`} id='growth' />
        <AbilityBlock svg={<System />} name={`<Systematic>`} id='system' />
      </div>
      <DropBox />
    </div>
  );
}

import styles from './drop.module.css';
import DragTarget from './dragTarget';
import { ReactComponent as Communiction } from '../../../assets/image/communication.svg';
import { ReactComponent as Creativity } from '../../../assets/image/creativity.svg';
import { ReactComponent as Growths } from '../../../assets/image/growth.svg';
import { ReactComponent as System } from '../../../assets/image/system.svg';
import { useEffect, useState } from 'react';

const COMMUNICATIONTEXT = [
  '지속적인 대화를 통해 의견을 공유하며 팀 전체가 같은 목표를 지향하고자 합니다.',
  '백엔드, 프론트엔드 경험을 통해 협엽간의 필요로하는 것에 대한 정확하고 빠른 커뮤니케이션이 가능합니다.'
];
const CREATIVITYTEXT = [
  '상상하는 것을 코드를 통해 구현하고자 합니다.',
  '여러 아이디어롤 통해 새로운것을 만들어 내고자 합니다.'
];
const GROWTHSTEXT = [
  '다양한 경험을 통해 성장하고자 합니다.',
  '성장을 위해 매번 새로운 기술을 학습하고 적용하는것에 익숙하며 '
];
const SYSTEMATICTEXT = [
  '새로 바꿀 필요 있다고 생각됨',
  '스킬 및 평소 가지는 능력'
];
const DRAGTEXT = [
  COMMUNICATIONTEXT,
  CREATIVITYTEXT,
  GROWTHSTEXT,
  SYSTEMATICTEXT
];

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
          {DRAGTEXT[num].map((data) => {
            return <p>{data}</p>;
          })}
        </div>
      </div>
    );
  };

  const defaultElement = (text) => {
    return <div className={styles['drop_extend']}>{text}</div>;
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
    default:
      return defaultElement(data);
  }
}

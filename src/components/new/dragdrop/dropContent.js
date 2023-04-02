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

const COMMUNICATIONCOMP = (
  <div>
    <p>BACKEND</p>
    <p>FRONTEND</p>
  </div>
);

const CREATIVITYCOMP = (
  <div>
    <img src='' />
    <p>project idea</p>
  </div>
);

const GROWTHSCOMP = (
  <div>
    <p>SKILLS</p>
    <p>SKILLS</p>
    <p>SKILLS</p>
  </div>
);

const SYSTEMATICCOMP = (
  <div>
    <p>문제해결</p>
  </div>
);

const DRAGCOMP = [
  COMMUNICATIONCOMP,
  CREATIVITYCOMP,
  GROWTHSCOMP,
  SYSTEMATICCOMP
];

const name =
  '안녕하세요 저는 사람들에게 멋진 가치를 제공 하는 것을 추구하는 개발자 이상현입니다.';

const introduction =
  '실제 누구나 사용하는 프로덕트를 개발하여 사람들의 삶의 질을 높여 줄수 있는 개발자가 되고자 하며, 최고의 프로덕트를 위해 최고의 코드를 고민하며, 경험을 통해 성장하며 발전하고자 합니다. \n무엇을? 왜? 어떻게? 라는 프로세스를 통해 문제해결에 대해 자신만의 차별화된 솔루션을 만들고자 하며, 이를위해 새로운 기술을 적극 활용하고 다양한 경험을 쌓아 폭넓은 사고를 보유하고자 합니다.';

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

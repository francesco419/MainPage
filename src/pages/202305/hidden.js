import styles from './hidden.module.css';
import { useRef, useState } from 'react';
import { TEXTARRAY, PNGIMAGES } from '../../context/ProjectText';
import { SHORTEN } from '../../context/SKillText';
import About from './about';
import Skill from './skill';
import Project from './project';
import Contact from './contact/contact';
import MyHeader from './myHeader';
import FooterContact from './contact/footer';

const aboutMe = [
  {
    num: '01',
    text: 'COMMUNICATION',
    detail: TEXTARRAY[0]
  },
  {
    num: '02',
    text: 'CREATIVITY',
    detail: TEXTARRAY[1]
  },
  {
    num: '03',
    text: 'GROWTHS',
    detail: TEXTARRAY[2]
  }
];

const mySkills = [
  {
    title: 'Baics',
    detail: SHORTEN[0],
    png: PNGIMAGES[0],
    color: '#ff8b2e',
    form: (
      <div
        className={`${styles['hidden-skill-one']} ${styles['hidden-skill-num']}`}
      >
        <One />
        <div
          className={`${styles['hidden-skill-two']} ${styles['hidden-skill-num']}`}
        >
          <One />
        </div>
      </div>
    )
  },
  {
    title: 'Libraries',
    detail: SHORTEN[1],
    png: PNGIMAGES[1],
    color: '#66ebfc',
    form: (
      <>
        <div
          className={`${styles['hidden-skill-square']} ${styles['hidden-skill-square1']}`}
          /* style={{ transform: 'translate(20%,-10%)' }} */
        >
          <Dot top='-5px' side='-5px' bool={true} />
          <Dot top='-5px' side='-5px' bool={false} />
          <Dot top='-5px' side='-5px' bool={true} />
          <Dot top='-5px' side='-5px' bool={false} />
        </div>
        <div
          className={`${styles['hidden-skill-square']} ${styles['hidden-skill-square2']}`}
        >
          <Dot top='-5px' side='-5px' bool={true} />
          <Dot top='-5px' side='-5px' bool={false} />
          <Dot top='-5px' side='-5px' bool={true} />
          <Dot top='-5px' side='-5px' bool={false} />
        </div>
      </>
    )
  },
  {
    title: 'Script',
    detail: SHORTEN[2],
    png: PNGIMAGES[2],
    color: '#9463fb',
    form: null
  }
];

const myProjects = [
  {
    name: 'Portfolio',
    text: '프론트엔드 공부를 하면서 프로젝트마다 어떤 기술을 공부했는지에 대한 사용 기술과 학습 내용을 담은 웹페이지를 제작했습니다.',
    img: 'https://picsum.photos/250/400'
  },
  {
    name: 'YouTube',
    text: '유튜브를 클로닝 한 프로젝트입니다. 가장 활발히 사용되는 웹사이트를 클로닝 함으로서 유튜브 UI를 직접 구현했습니다',
    img: 'https://picsum.photos/250/400'
  },
  {
    name: 'Travel Away',
    text: '코로나 이후 여행 수요의 증가로 각 국가의 기본 정보를 소개할 수 있는 웹페이지를 제작했습니다.',
    img: 'https://picsum.photos/250/400'
  },
  {
    name: 'Social Network',
    text: '프론트엔드와 백엔드의 기술을 사용하여 회원가입, 로그인, 게시물 등록 등의 기능을 포함한 SNS형태의 웹페이지 입니다.',
    img: 'https://picsum.photos/250/400'
  }
];

export default function Hidden() {
  return (
    <div className={styles['back']}>
      <div className={styles['hidden']}>
        <MyHeader />
        <div className={styles['hidden-title']}>
          <p>
            {
              '상상에 멈추지 않고 코드를 통해\n현실로 만들어내는 개발자,\n이상현입니다.'
            }
          </p>
        </div>
        <div className={styles['hidden-img']}>
          <img src='https://picsum.photos/1200/600' />
        </div>
        <div className={styles['hidden-intro']}>
          <p>{`이렇게끊임없이 변화되는 코드와 함께 성장해나가려고 노력하는 신입 개발자 이상현입니다.\n무언가를 제작하는 것을 좋아했기에 코드를 사용해 생각하는 것을 만들어 낼 수 있는\n개발에 큰 흥미를 느껴 개발자가 되고자 결심하게 되었으며, 사용자 경험을 중시하는 마인드를 갖고\n보다 정확하고 편리한 서비스를 제공하는 개발자가 되고자 합니다.`}</p>
        </div>
        <div className={styles['hidden-about']}>
          <p className={styles['hidden-rem']}>ABOUT ME</p>
          {aboutMe.map((data) => {
            return (
              <About number={data.num} text={data.text} detail={data.detail} />
            );
          })}
        </div>
        <div className={styles['hidden-skill']}>
          <p className={styles['hidden-rem']}>SKILL</p>
          {mySkills.map((data) => {
            return (
              <Skill
                title={data.title}
                detail={data.detail}
                img={data.png}
                form={data.form}
                color={data.color}
              />
            );
          })}
        </div>
        <div className={styles['hidden-project']}>
          <p className={styles['hidden-rem']}>PROJECT</p>
          <div className={styles['hidden-project-container']}>
            {myProjects.map((data) => {
              return (
                <Project name={data.name} text={data.text} img={data.img} />
              );
            })}
          </div>
        </div>
        <FooterContact />
      </div>
    </div>
  );
}

function Dot({ top, side, bool }) {
  return (
    <div
      className={styles['hidden-skill-dot']}
      style={bool ? { top: top, left: side } : { top: top, right: side }}
    ></div>
  );
}

function One() {
  return (
    <div className={styles['hidden-skill-line']}>
      <div className={styles['hidden-skill-circle']}></div>
    </div>
  );
}

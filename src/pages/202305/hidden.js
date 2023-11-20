import styles from './hidden.module.css';
import { useRef } from 'react';
import { TEXTARRAY, PNGIMAGES } from '../../context/ProjectText';
import { SHORTEN } from '../../context/SKillText';
import About from './about';
import Skill from './skill';
import Project from './project';
import MyHeader from './myHeader';
import FooterContact from './contact/footer';
import TopIndicator from './top/toTop';
import front from '../../assets/image/front.PNG';
import { myProjects } from '../../context/ProjectText';

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

const delayArray = [0, 0.3, 0.6, 0.9, 1.2, 1.5, 1.8, 2.1, 2.4, 2.7];

const mySkills = [
  {
    title: 'Basics',
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
          {/* <div className={styles['linel']}></div> */}
          <Dot
            location={{
              top: '-5px',
              left: '-5px'
            }}
          />
          <Dot
            location={{
              top: '-5px',
              right: '-5px'
            }}
          />
          <Dot
            location={{
              bottom: '-5px',
              left: '-5px'
            }}
          />
          <Dot
            location={{
              bottom: '-5px',
              right: '-5px'
            }}
          />
        </div>
        <div
          className={`${styles['hidden-skill-square']} ${styles['hidden-skill-square2']}`}
        >
          <Dot
            location={{
              top: '-5px',
              left: '-5px'
            }}
          />
          <Dot
            location={{
              top: '-5px',
              right: '-5px'
            }}
          />
          <Dot
            location={{
              bottom: '-5px',
              left: '-5px'
            }}
          />
          <Dot
            location={{
              bottom: '-5px',
              right: '-5px'
            }}
          />
        </div>
      </>
    )
  },
  {
    title: 'Script',
    detail: SHORTEN[2],
    png: PNGIMAGES[2],
    color: '#9463fb',
    form: (
      <div className={styles['hidden-skill-bb']}>
        {delayArray.map((data) => {
          return (
            <div
              className={styles['hidden-skill-aa']}
              style={{ animationDelay: `${data}s` }}
              key={`${data}_circle`}
            />
          );
        })}
      </div>
    )
  }
];

const intro = `끊임없이 변화되는 코드와 함께 성장해나가려고 노력하는 신입 개발자 이상현입니다.\n무언가를 제작하는 것을 좋아했기에 코드를 사용해 생각하는 것을 만들어 낼 수 있는\n개발에 큰 흥미를 느껴 개발자가 되고자 결심하게 되었으며, 사용자 경험을 중시하는 마인드를 가지고\n보다 정확하고 편리한 서비스를 제공하는 개발자가 되고자 합니다.`;

export default function Hidden() {
  const about = useRef(),
    skill = useRef(),
    project = useRef(),
    contact = useRef();

  return (
    <div className={styles['back']}>
      <TopIndicator />
      <div className={styles['hidden']}>
        <MyHeader
          refer={{
            about: about,
            skill: skill,
            project: project,
            contact: contact
          }}
        />
        <div className={styles['hidden-title']}>
          <p>
            {
              '상상에 멈추지 않고 코드를 통해\n현실로 만들어내는 개발자,\n이상현입니다.'
            }
          </p>
        </div>
        <div className={styles['hidden-img']}>
          <img src={front} />
          {/*  //src='https://picsum.photos/1200/600' /> */}
        </div>
        <div className={styles['hidden-intro']}>
          <p>{intro}</p>
        </div>
        <div ref={about} className={styles['hidden-about']}>
          <p className={styles['hidden-rem']}>ABOUT ME</p>
          {aboutMe.map((data, index) => {
            return <About about={data} count={index} key={`about_${index}`} />;
          })}
        </div>
        <div ref={skill} className={styles['hidden-skill']}>
          <p className={styles['hidden-rem']}>SKILL</p>
          {mySkills.map((data, index) => {
            return (
              <Skill
                title={data.title}
                detail={data.detail}
                img={data.png}
                form={data.form}
                color={data.color}
                key={`skill_${index}`}
              />
            );
          })}
        </div>
        <div ref={project} className={styles['hidden-project']}>
          <p className={styles['hidden-rem']}>PROJECT</p>
          <div className={styles['hidden-project-container']}>
            {myProjects.map((data, index) => {
              return (
                <Project projects={data} num={index} key={`project_${index}`} />
              );
            })}
          </div>
        </div>
        <FooterContact refer={contact} />
      </div>
    </div>
  );
}

function Dot({ location }) {
  return <div className={styles['hidden-skill-dot']} style={location} />;
}

function One() {
  return (
    <div className={styles['hidden-skill-line']}>
      <div className={styles['hidden-skill-circle']}></div>
    </div>
  );
}

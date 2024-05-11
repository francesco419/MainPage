import styles from './skills.module.css';
import SkillBox from './skillNew';
import { ReactComponent as NodeJS } from '../skill/asset/svg/nodejs.svg';
import { ReactComponent as CSS } from '../skill/asset/svg/css.svg';
import { ReactComponent as Git } from '../skill/asset/svg/git.svg';
import { ReactComponent as Github } from '../skill/asset/svg/github.svg';
import { ReactComponent as JavaScript } from '../skill/asset/svg/js.svg';
import { ReactComponent as Notion } from '../skill/asset/svg/notion.svg';
import { ReactComponent as Npm } from '../skill/asset/svg/npm.svg';
import { ReactComponent as ReactSVG } from '../skill/asset/svg/react.svg';
import { ReactComponent as Redux } from '../skill/asset/svg/redux.svg';
import { ReactComponent as SASS } from '../skill/asset/svg/sass.svg';
import { ReactComponent as TS } from '../skill/asset/svg/typescript.svg';
import { ReactComponent as AWS } from '../skill/asset/svg/aws.svg';
import { ReactComponent as HTML } from '../skill/asset/svg/html.svg';
import { ReactComponent as Lodash } from '../skill/asset/svg/lodash.svg';
import _ from 'lodash';

const temp = [
  {
    name: 'HTML',
    svg: <HTML />
  },
  {
    name: 'CSS',
    svg: <CSS />
  },
  {
    name: 'Sass',
    svg: <SASS />
  },
  {
    name: 'JavaScript',
    svg: <JavaScript />
  },
  {
    name: 'TypeScript',
    svg: <TS />
  },
  {
    name: 'Redux',
    svg: <Redux />
  },
  {
    name: 'React',
    svg: <ReactSVG />
  },
  {
    name: 'Git',
    svg: <Git />
  },
  {
    name: 'Github',
    svg: <Github />
  },
  {
    name: 'AWS',
    svg: <AWS />
  },
  {
    name: 'Lodash',
    svg: <Lodash />
  },
  {
    name: 'Notion',
    svg: <Notion />
  },
  {
    name: 'Npm',
    svg: <Npm />
  },
  {
    name: 'NodeJs',
    svg: <NodeJS />
  }
];

export default function OutBoxSkill({ reference }) {
  return (
    <div ref={reference} className={styles['skill_section']}>
      <p className={styles['skill_title']}>SKILL</p>
      <div className={styles['skill_cardBox']}>
        {_.map(_.shuffle(temp), (o, index) => {
          return (
            <SkillBox
              name={o.name}
              svg={o.svg}
              index={index + 1}
              key={o.name}
            />
          );
        })}
      </div>
    </div>
  );
}

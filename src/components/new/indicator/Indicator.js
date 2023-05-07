import styles from './Indicator.module.css';
import PropTypes from 'prop-types';
import { ReactComponent as Home } from '../../../assets/image/sticksvg/home.svg';
import { ReactComponent as About } from '../../../assets/image/sticksvg/about.svg';
import { ReactComponent as Skill } from '../../../assets/image/sticksvg/skill.svg';
import { ReactComponent as Project } from '../../../assets/image/sticksvg/project.svg';
import { ReactComponent as Contact } from '../../../assets/image/sticksvg/contact.svg';
import { ReactComponent as Navigate } from '../../../assets/image/sticksvg/navigate.svg';
import { ReactComponent as Me } from '../../../assets/image/sticksvg/me.svg';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Indicator({ type }) {
  return type ? <StickForm /> : <SideForm />;
}

function StickForm() {
  const nav = useNavigate();
  return (
    <div className={styles['c-indicator-stick']}>
      <div
        onClick={() => {
          nav(`/List`);
        }}
        className={styles['c-indicator-stick__nav']}
      >
        <Navigate />
      </div>
      <IndicatorItem
        sideNum={0}
        svg={<Home />}
        to={`${process.env.PUBLIC_URL}/`}
      />
      <IndicatorItem sideNum={1} svg={<About />} to='/intro' />
      <IndicatorItem sideNum={2} svg={<Me />} to='/sec' />
      <IndicatorItem sideNum={3} svg={<Skill />} to='/asec' />
      <IndicatorItem sideNum={4} svg={<Project />} to='/third' />
      <IndicatorItem sideNum={5} svg={<Contact />} to='/fourth' />
    </div>
  );
}

function IndicatorItem({ sideNum, svg, to }) {
  const side = useSelector((state) => state.side.value);
  const nav = useNavigate();

  return (
    <div
      /* style={
        side === sideNum
          ? { border: '1.5px solid #fff', borderRadius: '50%' }
          : null
      } */
      onClick={() => nav(to)}
    >
      <div style={{ fill: side === sideNum ? '#edd451' : '#fff' }}>{svg}</div>
    </div>
  );
}

function SideForm() {
  const side = useSelector((state) => state.side.value);
  const menulist = ['HOME', 'ABOUT ME', 'SKILLS', 'PROJECTS', 'CONTACT'];

  return (
    <div className={styles['c-indicator-side']}>
      {menulist.map((data, index) => (
        <div
          className={styles['c-indicator-side__item']}
          style={{
            color: side === index ? '#edd451' : '#fff',
            fontWeight: side === index ? 'bold' : 'normal'
          }}
        >
          {data}
        </div>
      ))}
      <span className={styles['c-indicator-side__line']}></span>
    </div>
  );
}

Indicator.propTypes = {
  type: PropTypes.bool.isRequired
};

/**
Home
about me
Resume
Projects
Contact 
*/

/**
 * 기본 파랑 5190F4
보내준 샘플 짙은 파랑 0c3184
보내준 샘플 연한 하늘 (내용 백그라운드) cfe3fb
보내준 샘플 슬라이드 d5d9e2
보내준 샘플 블랙 292929

컬러 팔레트에서
1번째 진한 파랑 005DB9
2번째 연한 하늘 D0E9EF
3번째 노랑 EDD451 / 블랙 353535
4번째 틸컬러 B9EFFF / 보라 4A4499
 */

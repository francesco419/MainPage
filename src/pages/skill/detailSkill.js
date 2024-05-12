import styles from './detail.module.css';
import { skillDescription } from '../../context/SKillText';
import _ from 'lodash';
import { useEffect, useState } from 'react';

export default function DetailSkill({ name }) {
  const [isLink, setIsLink] = useState(false);
  const reget_link = /(http(s)?:\/\/)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/gi;
  const description = _.filter(skillDescription, { name: name });

  useEffect(() => {
    setIsLink(reget_link.test(description[0].description));
  }, []);

  return (
    <div className={styles['skill_detail']}>
      {isLink ? (
        <a
          href={description[0] ? description[0].description : null}
          target='_blank'
        >
          <h2>Link : {name}</h2>
        </a>
      ) : (
        <>
          <h2>{name}</h2>
          <p>{description[0] ? description[0].description : null}</p>
        </>
      )}
    </div>
  );
}

//  /(http(s)?:\/\/)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/gi
// 링크 정규식

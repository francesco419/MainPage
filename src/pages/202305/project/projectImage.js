import { useRef, useEffect, useState } from 'react';
import styles from './projectPage.module.css';

export default function ProjectImage({ project }) {
  const [slideCount, setSlideCount] = useState(0);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setAnimation((animation) => true);
    setSlideCount((slideCount) => 0);
  }, [project]);

  const buttonClick = (bool) => {
    if (bool && slideCount > -project.img.length + 1)
      setSlideCount((slideCount) => slideCount - 1);

    if (!bool && slideCount < 0) setSlideCount((slideCount) => slideCount + 1);
  };

  return (
    <div className={styles['my-project-image']}>
      <div className={styles['my-project-image-button']}>
        <button onClick={() => buttonClick(false)}>A</button>
        <button onClick={() => buttonClick(true)}>B</button>
      </div>
      <div
        className={styles['my-project-img']}
        style={{ transform: `translateX(${slideCount * 100}%)` }}
      >
        {project.img.map((data, index) => {
          return <img src={data} key={`img_${index}`} />;
        })}
      </div>
    </div>
  );
}

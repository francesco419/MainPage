import { useRef, useEffect, useState } from 'react';
import styles from './projectPage.module.css';
import { ReactComponent as Right } from './assets/right.svg';
import { ReactComponent as Left } from './assets/left.svg';
import ImageZoom from './imageZoom';

export default function ProjectImage({ project }) {
  const [slideCount, setSlideCount] = useState(0);
  const [zoomImage, setZoomImage] = useState(false);

  useEffect(() => {
    setSlideCount((slideCount) => 0);
  }, [project]);

  const buttonClick = (bool) => {
    if (bool && slideCount > -project.img.length + 1)
      setSlideCount((slideCount) => slideCount - 1);

    if (!bool && slideCount < 0) setSlideCount((slideCount) => slideCount + 1);
  };

  const changeZoomImage = () => {
    setZoomImage((zoomImage) => !zoomImage);
  };

  return (
    <div className={styles['my-project-image']}>
      {zoomImage && (
        <ImageZoom
          slideCount={slideCount}
          buttonClick={buttonClick}
          image={project.img}
          changeZoom={changeZoomImage}
        />
      )}
      <button
        className={styles['my-project-image-button']}
        onClick={() => buttonClick(false)}
      >
        <Left />
      </button>
      <div
        className={styles['my-project-img']}
        style={{ transform: `translateX(${slideCount * 100}%)` }}
        onClick={changeZoomImage}
      >
        {project.img.map((data, index) => {
          return <img src={data} key={`img_${index}`} />;
        })}
      </div>
      <button
        className={styles['my-project-image-button']}
        style={{ right: 0 }}
        onClick={() => buttonClick(true)}
      >
        <Right />
      </button>
    </div>
  );
}

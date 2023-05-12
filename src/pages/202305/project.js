import styles from './project.module.css';

export default function Project({ name, text, img }) {
  return (
    <div className={styles['hidden-project-index']}>
      <img src={img} />
      <div className={`${styles['hidden-project-front']} ${styles['topleft']}`}>
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}

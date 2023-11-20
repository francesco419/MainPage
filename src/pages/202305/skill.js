import styles from './skill.module.css';

export default function Skill({ title, detail, img, form, color }) {
  return (
    <div className={styles['hidden-skill-index']}>
      <div className={styles['hidden-skill-detail']}>
        <h1>{title}</h1>
        <p>{detail}</p>
        <div className={styles['hidden-skill-icon']}>
          {img.map((data, index) => {
            return <img src={data} key={`${title}_${index}`} />;
          })}
        </div>
      </div>
      <div
        className={`${styles['hidden-skill-img']}`}
        style={{ backgroundColor: '#00000010' }}
      >
        {form}
      </div>
    </div>
  );
}

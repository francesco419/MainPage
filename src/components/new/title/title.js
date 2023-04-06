import styles from './title.module.css';

export default function Title({ ref, title }) {
  return (
    <div className={styles['title']} ref={ref}>
      <h2>{title}</h2>
    </div>
  );
}

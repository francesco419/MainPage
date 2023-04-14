import styles from './myComp.module.css';

export default function MyComp({ svg, name, text }) {
  return (
    <div className={styles['secondpage-table']}>
      <div className={styles['secondpage-table_data']}>
        {svg}
        <p>{name}</p>
      </div>
      <ul className={styles['secondpage-table__list']}>
        {text.map((data) => {
          return (
            <li>
              <p>{data}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

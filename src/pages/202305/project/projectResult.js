import styles from './projectPage.module.css';

export default function ProjectResult({ project }) {
  return (
    <div className={styles['my-project-result']}>
      <h1>Result & Take Away</h1>
      <ul>
        {project.result.map((data, index) => {
          return (
            <li key={`result_${index}`}>
              <p>{data}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

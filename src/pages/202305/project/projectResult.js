import styles from './projectPage.module.css';
import ReactMarkdown from 'react-markdown';

export default function ProjectResult({ project }) {
  return (
    <div className={styles['my-project-result']}>
      <h1>Result & Take Away</h1>
      <ul>
        {project.result.map((data, index) => {
          return (
            <li key={`result_${index}`}>
              <ReactMarkdown>{data}</ReactMarkdown>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

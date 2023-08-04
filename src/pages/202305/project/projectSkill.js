import styles from './projectPage.module.css';

export default function ProjectSkill({ project }) {
  return (
    <div className={styles['my-project-stack']}>
      <h1>Skill Stack</h1>
      <div className={styles['my-project-skills']}>
        {project.program.map((data, index) => {
          return (
            <div className={styles['my-project-skill']} key={`skill_${index}`}>
              <p>{data}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

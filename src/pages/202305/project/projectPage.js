import MyHeader from '../myHeader';
import styles from './projectPage.module.css';

export default function ProjectPage() {
  return (
    <div>
      <div className={styles['my-project']}>
        <MyHeader />
        <p className={styles['my-project-title']}>Project 1 : Portfolio</p>
      </div>
    </div>
  );
}

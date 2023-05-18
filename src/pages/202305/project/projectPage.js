import { useEffect, useState } from 'react';
import MyHeader from '../myHeader';
import styles from './projectPage.module.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ProjectDetailText } from '../../../context/ProjectText';
import FooterContact from '../contact/footer';
import { ReactComponent as Right } from '../../../assets/svg/right.svg';
import { useNavigate } from 'react-router-dom';
import TopIndicator from '../top/toTop';

export default function ProjectPage() {
  const param = useParams();
  const [gitRepo, setGitRepo] = useState();
  const [loading, setLoading] = useState(true);
  const projectText = ProjectDetailText.filter(
    (data) => data.param === param.id
  );
  const nav = useNavigate();

  useEffect(() => {
    getGithub();
    window.scrollTo(0, 0);
  }, []);

  const getGithub = async () => {
    try {
      const response = await axios.get(
        'https://api.github.com/users/francesco419/repos'
      );
      const repo = response.data.filter((data) => {
        return data.name === param.id;
      });
      setGitRepo((gitRepo) => repo);
      setLoading((loading) => false);
    } catch {
      console.log('fetching error');
    }
  };

  const newDate = (date) => {
    return date.substr(0, 10).replaceAll('-', '.');
  };

  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <div>
        <TopIndicator />
        <div className={styles['my-project']}>
          <MyHeader refer={null} />
          <p
            className={styles['my-project-title']}
          >{`Project ${projectText[0].id} : ${projectText[0].name}`}</p>
          <div className={styles['my-project-update']}>
            <p>{`Last Update : ${newDate(gitRepo[0].pushed_at)}`}</p>
            <p>|</p>
            <p>{`Created : ${newDate(gitRepo[0].created_at)}`}</p>
          </div>
          <div className={styles['my-project-intro']}>
            <p>{projectText[0].text2}</p>
          </div>
          <div className={styles['my-project-stack']}>
            <h1>Skill Stack</h1>
            <div className={styles['my-project-skills']}>
              {projectText[0].program.map((data) => {
                return (
                  <div className={styles['my-project-skill']}>
                    <p>{data}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles['my-project-image']}>
            {projectText[0].img.map((data, index) => {
              if (index < 3) {
                return (
                  <div className={styles['my-project-img']}>
                    <img src={data} />
                  </div>
                );
              }
            })}
          </div>
          <div className={styles['my-project-result']}>
            <h1>Result & Take Away</h1>
            <ul>
              {projectText[0].result.map((data) => {
                return (
                  <li>
                    <p>{data}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          {projectText[0].next ? (
            <div className={styles['my-project-next']}>
              <button onClick={() => nav(`/project/${projectText[0].next}`)}>
                Next
              </button>
              <Right />
            </div>
          ) : null}
          <FooterContact />
        </div>
      </div>
    );
  }
}

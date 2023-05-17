import { useEffect, useState } from 'react';
import MyHeader from '../myHeader';
import styles from './projectPage.module.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ProjectDetailText } from '../../../context/ProjectText';
import FooterContact from '../contact/footer';
import { ReactComponent as Right } from '../../../assets/svg/right.svg';

export default function ProjectPage() {
  const param = useParams();
  const [gitRepo, setGitRepo] = useState();
  const [loading, setLoading] = useState(true);
  const [projectText, setProjectText] = useState(
    ProjectDetailText.filter((data) => data.param === param.id)
  );

  useEffect(() => {
    getGithub();
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
      console.log(response);
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
    console.log(gitRepo[0]);
    console.log(projectText);
    return (
      <div>
        <div className={styles['my-project']}>
          <MyHeader />
          <p className={styles['my-project-title']}>Project 1 : Portfolio</p>
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
              <div className={styles['my-project-skill']}>
                <p>React</p>
              </div>
              <div className={styles['my-project-skill']}>
                <p>Redux Toolkit</p>
              </div>
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
          <div className={styles['my-project-next']}>
            <button>Next</button>
            <Right />
          </div>
          <FooterContact />
        </div>
      </div>
    );
  }
}

import styles from './projectPage.module.css';
import ReactMarkdown from 'react-markdown';

const test = [
  {
    name: 'finedition',
    data: [
      {
        title: '주요기능',
        info: [
          '외국 관광객에게 효과적으로 전국의 관광정보를 전달',
          '인포그래픽으로외국관광객 눈높이에서 정보 전달',
          '매거진기능으로정보를자체 큐레이션하여전달'
        ]
      },
      {
        title: '담당역할 및 목표',
        info: [
          '기획 및 디자인 1명, 개발자 1명',
          'Front-End : 기획 요구에 따라 전반적인 웹페이지 제작 (100%)',
          'Back-End : 서비스에서 제공하는 데이터 서버 구축 및 관리 (100%)'
        ]
      },
      {
        title: '성과 및 배운점',
        info: ['null']
      }
    ]
  },
  {
    name: 'mindmap',
    data: [
      {
        title: '주요기능',
        info: [
          '별도의 회원가입 없이 마인드맵 서비스 제공',
          '파일형대로의 저장 및 불러오기를 통한 기능 제공'
        ]
      },
      {
        title: '담당역할 및 목표',
        info: ['개인 프로젝트 (100%)']
      },
      {
        title: '성과 및 배운점',
        info: ['null']
      }
    ]
  },
  {
    name: 'socail network',
    data: [
      {
        title: '주요기능',
        info: ['소통, 기록할 수 있는 Social Network Service를 제공']
      },
      {
        title: '담당역할 및 목표',
        info: ['개인 프로젝트 (100%)']
      },
      {
        title: '성과 및 배운점',
        info: ['null']
      }
    ]
  },
  {
    name: 'travel away',
    data: [
      {
        title: '주요기능',
        info: [
          '외국 관광객에게 효과적으로 전국의 관광정보를 전달',
          '인포그래픽으로외국관광객 눈높이에서 정보 전달',
          '매거진기능으로정보를자체 큐레이션하여전달'
        ]
      },
      {
        title: '담당역할 및 목표',
        info: [
          '외국 관광객에게 효과적으로 전국의 관광정보를 전달',
          '인포그래픽으로외국관광객 눈높이에서 정보 전달',
          '매거진기능으로정보를자체 큐레이션하여전달'
        ]
      },
      {
        title: '성과 및 배운점',
        info: ['null']
      }
    ]
  },
  {
    name: 'youtube',
    data: [
      {
        title: '주요기능',
        info: [
          '외국 관광객에게 효과적으로 전국의 관광정보를 전달',
          '인포그래픽으로외국관광객 눈높이에서 정보 전달',
          '매거진기능으로정보를자체 큐레이션하여전달'
        ]
      },
      {
        title: '담당역할 및 목표',
        info: [
          '외국 관광객에게 효과적으로 전국의 관광정보를 전달',
          '인포그래픽으로외국관광객 눈높이에서 정보 전달',
          '매거진기능으로정보를자체 큐레이션하여전달'
        ]
      },
      {
        title: '성과 및 배운점',
        info: ['null']
      }
    ]
  }
];

export default function ProjectResult({ project }) {
  return (
    <div className={styles['my-project-result']}>
      {test[0].data.map((data, index) => {
        return (
          <ul className={styles['my-project-skill']} key={`skill_${index}`}>
            <h4>{data.title}</h4>
            {data.info.map((o) => {
              return (
                <li>
                  <ReactMarkdown>{o}</ReactMarkdown>
                </li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
}
/**
 *         {test[0].data.map((data, index) => {
          return (
            <div className={styles['my-project-skill']} key={`skill_${index}`}>
              <h4>{data.title}</h4>
              {data.info.map((o) => {
                <p>{o}</p>;
              })}
            </div>
          );
        })}
 */

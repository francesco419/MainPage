import { ReactComponent as NodeJS } from '../pages/skill/asset/svg/nodejs.svg';
import { ReactComponent as CSS } from '../pages/skill/asset/svg/css.svg';
import { ReactComponent as Git } from '../pages/skill/asset/svg/git.svg';
import { ReactComponent as Github } from '../pages/skill/asset/svg/github.svg';
import { ReactComponent as JavaScript } from '../pages/skill/asset/svg/js.svg';
import { ReactComponent as Notion } from '../pages/skill/asset/svg/notion.svg';
import { ReactComponent as Npm } from '../pages/skill/asset/svg/npm.svg';
import { ReactComponent as ReactSVG } from '../pages/skill/asset/svg/react.svg';
import { ReactComponent as Redux } from '../pages/skill/asset/svg/redux.svg';
import { ReactComponent as SASS } from '../pages/skill/asset/svg/sass.svg';
import { ReactComponent as TS } from '../pages/skill/asset/svg/typescript.svg';
import { ReactComponent as AWS } from '../pages/skill/asset/svg/aws.svg';
import { ReactComponent as HTML } from '../pages/skill/asset/svg/html.svg';
import { ReactComponent as Lodash } from '../pages/skill/asset/svg/lodash.svg';

export const SHORTEN = [
  [
    '기본이라고 할 수 있는 HTML/CSS를 자유자재로 구현할 수 있습니다. ',
    '\nES6 이후의 JS를 사용하는것에 능숙하며,',
    ' 프로덕트에 요구되는 적절한 애니메이션을 Keyframe / transition 등을 통해 구현할 수 있습니다.'
  ],
  [
    '함수형 컴포넌트 형태의 작성을 선호합니다. ',
    '라이프 사이클을 이해하여 최적의 랜더링을 통한 최고의 프로덕트를 만들고자 합니다. ',
    'Redux를 사용하여 props 복잡도를 해결하고, 스토어를 통한 프로젝트의 효율적인 상태관리를 할 수 있습니다.'
  ],
  [
    '변수/ 중첩/ 함수 등의 문법을 적절히 사용하여 기존 CSS를 구조화한 형태로 표현할 수 있습니다. ',
    '정적코드작성 및 타입오류로 인한 에러의 문제해결이 가능합니다. ',
    'TS로 인해 코드량이 많아지고 복잡해지나, 유지보수 및 코드 퀄리티에서의 장점또한 이해하고 있습니다.'
  ]
];

/**
 * MarkUP/Styling Language = HTML, Css
 * Package Managers = npm
 * scc Preprocessor = Sass
 * css Framworks =
 * javascript framwork = react
 * programming Language = js, ts
 * tool = git,github,netlify,vs code,aws
 */

const temp = [
  {
    name: 'AWS'
  },
  {
    name: 'Notion'
  },
  {
    name: 'Npm'
  },
  {
    name: 'NodeJs'
  }
];

export const skillListSVG = [
  {
    name: 'HTML',
    svg: <HTML />
  },
  {
    name: 'CSS',
    svg: <CSS />
  },
  {
    name: 'Sass',
    svg: <SASS />
  },
  {
    name: 'JavaScript',
    svg: <JavaScript />
  },
  {
    name: 'TypeScript',
    svg: <TS />
  },
  {
    name: 'Redux',
    svg: <Redux />
  },
  {
    name: 'React',
    svg: <ReactSVG />
  },
  {
    name: 'Git',
    svg: <Git />
  },
  {
    name: 'Github',
    svg: <Github />
  },
  {
    name: 'AWS',
    svg: <AWS />
  },
  {
    name: 'Lodash',
    svg: <Lodash />
  },
  {
    name: 'Notion',
    svg: <Notion />
  },
  {
    name: 'Npm',
    svg: <Npm />
  },
  {
    name: 'NodeJs',
    svg: <NodeJS />
  }
];

export const skillDescription = [
  {
    name: 'Lodash',
    extra: '',
    description:
      'Lodash의 특장점을 잘 이해하고 능숙하게 활용 할 수 있습니다. 배열과 객체를 다루는데 필요한 다양한 함수들을 숙지하고 있으며, 이를 통해 코드를 더 간결하고 효율적으로 작성할 수 있습니다. 또한, Lodash의 성능을 최대한 활용하여 대용량 데이터 처리와 같은 작업을 신속하게 수행할 수 있습니다.'
  },
  {
    name: 'TypeScript',
    extra: '',
    description:
      '타입스크립트를 능숙하게 활용하여 안정적이고 효율적인 코드를 작성할 수 있습니다. 특징인 정적 타입을 통해 코드의 가독성을 향상시키고 유지 보수성을 높일 수 있으며, 또한, 정적 타입 검사를 통해 코드를 작성하는 과정에서 발생할 수 있는 오류를 사전에 예방하고 수정하여 프로젝트의 안정성을 유지하고자 합니다.'
  },
  {
    name: 'HTML',
    extra: '',
    description:
      'HTML을 사용해 다양한 웹 페이지를 구축하고 유지 보수하는 데 능숙합니다. 다양한 태그와 속성을 이용하여 웹 페이지를 구조화하고, 시맨틱하게 작성함으로써 코드의 가독성을 높일 수 있으며, 다양한 디바이스와 환경에서 일관된 사용자 경험을 제공하기 위해 크로스 플랫폼 호환성에 중점을 두고 웹 페이지를 개발하고 있습니다.'
  },
  {
    name: 'CSS',
    extra: '',
    description:
      'CSS의 다양한 스타일링 기능을 효과적으로 사용하여 웹페이지를 최신 트랜드에 맞춰 디자인하는데 능숙합니다. 또한 반응형 웹 디자인과 크로스 브라우징을 통해 높은 사용자 경험을 제공하고자 합니다.'
  },
  {
    name: 'Sass',
    extra: '',
    description:
      '변수, 중첩, 상속 등의 기능을 적극적으로 활용하여 CSS 코드를 보다 모듈화되고 유지보수하기 쉽게 작성하고자 합니다. Mixin과 extends를 통해 코드의 재사용성을 높이고, 코드를 더욱 효율적으로 관리함으로서 읽기 쉽고 유지보수하기 쉽게 작성하여 팀 프로젝트의 효율성을 높이고자 합니다.'
  },
  {
    name: 'JavaScript',
    extra: '',
    description:
      '웹 페이지에서 발생하는 다양한 이벤트를 처리하여 사용자와의 상호작용을 향상시킴으로서 사용자들에게 보다 편리하고 직관적인 웹 경험을 제공하고자 합니다.'
  },
  {
    name: 'Redux',
    extra: '',
    description:
      'Redux를 이용하여 각 컴포넌트에서 필요한 상태를 Redux Store에 통합함으로써 데이터의 중앙 집중화를 통해 상태를 명확하게 관리하고, props 복잡도를 해결 할 수 있습니다. Redux Toolki을 활용하여 기존 Redux의 복잡성을 최소화하고 이를 Immer 라이브러리와 함께 사용하여 불변성을 유지하면서 상태를 관리하는 능력을 가지고 있습니다.'
  },
  {
    name: 'React',
    extra: '',
    description:
      'Hook을 의도에 적합하게 활용하여 재사용성을 높이고 가독성을 향상시킨 함수형 컴포넌트 형태의 코드작성에 능숙합니다. 라이프 사이클의 이해를 바탕으로 React의 가상 DOM을 이용하여 성능 최적화를 실시하고, 컴포넌트 간의 데이터 흐름을 관리하여 애플리케이션의 확장성을 높이고자 합니다.'
  },
  {
    name: 'Git',
    extra: '',
    description:
      'Git을 통한 프로젝트 작업 전반의 효율을 높이고, 브랜치 전략, 코드 리뷰, 충돌 최소화 등의 긍정적인 효과를 경험하며 버전 관리 시스템 사용의 중요성을 알아가게 되었습니다.'
  },
  {
    name: 'Github',
    extra: '',
    description: 'https://github.com/francesco419'
  },
  {
    name: 'AWS',
    extra: '',
    description:
      'AWS를 이용하여 프로젝트의 인프라를 구축한 경험을 가지고 있습니다. RDS를 이용하여 데이터베이스를 관리하며, S3를 활용하여 파일 스토리지를 구축하는 등 다양한 서비스를 효과적으로 활용했습니다.'
  },
  {
    name: 'Notion',
    extra: '',
    description: ''
  },
  {
    name: 'Npm',
    extra: '',
    description:
      'npm을 이용하여 프로젝트에 필요한 다양한 라이브러리와 패키지를 쉽게 설치하고 관리합니다.'
  },
  {
    name: 'NodeJs',
    extra: '',
    description:
      'Node.js를 이용하여 웹 서버를 구성하는 등 백엔드 개발 경험을 가지고있습니다. 프론트와의 원활한 통신을 위해 CORS 설정하고, Express.js를 비롯한 프레임워크를 활용하여 빠르고 안정적인 웹 애플리케이션을 개발하였습니다.'
  }
];

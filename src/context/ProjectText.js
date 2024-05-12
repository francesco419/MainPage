/**portfolio*/
import port1 from '../assets/image/projectImgNew/portfolio/1.PNG';
import port2 from '../assets/image/projectImgNew/portfolio/2.PNG';
import port3 from '../assets/image/projectImgNew/portfolio/3.PNG';
import port4 from '../assets/image/projectImgNew/portfolio/4.PNG';
import port5 from '../assets/image/projectImgNew/portfolio/5.PNG';
/**youtube */
import youtube1 from '../assets/image/projectImgNew/youtube/youtube1.PNG';
import youtube2 from '../assets/image/projectImgNew/youtube/youtube2.PNG';
import youtube3 from '../assets/image/projectImgNew/youtube/youtube3.PNG';
/**travel */
import travel1 from '../assets/image/projectImgNew/travel/1.PNG';
import travel2 from '../assets/image/projectImgNew/travel/2.PNG';
import travel3 from '../assets/image/projectImgNew/travel/3.PNG';
/**social */
import social1 from '../assets/image/projectImgNew/sns/1.PNG';
import social2 from '../assets/image/projectImgNew/sns/2.PNG';
import social3 from '../assets/image/projectImgNew/sns/3.PNG';
import social4 from '../assets/image/projectImgNew/sns/4.PNG';
/**mindmap */
import mindmap1 from '../assets/image/projectImgNew/mindmap/mindmap1.png';
import mindmap2 from '../assets/image/projectImgNew/mindmap/mindmap2.png';
import mindmap3 from '../assets/image/projectImgNew/mindmap/mindmap3.png';
/**finedition */
import finedition_home from '../assets/image/projectImgNew/finedition/finedition-home.png';
import finedition_food from '../assets/image/projectImgNew/finedition/finedition-food.png';
import finedition_place from '../assets/image/projectImgNew/finedition/finedition-place.png';
import finedition_seoul from '../assets/image/projectImgNew/finedition/finedition-seoul.png';

/**image */
import css from '../assets/svg/icon/css.png';
import javascript from '../assets/svg/icon/javascript.png';
import html from '../assets/svg/icon/html.png';
import react from '../assets/svg/icon/react.png';
import redux from '../assets/svg/icon/redux.png';
import typescript from '../assets/svg/icon/typescript.png';
import scss from '../assets/svg/icon/scss.png';

export const PNGIMAGES = [
  [javascript, html, css],
  [react, redux],
  [typescript, scss]
];

const COMMUNICATIONTEXT = [
  '커뮤니케이션을 통해 문제에 대하여 보다 효율적이고 신속하게 적절한 해답을 찾고자 합니다.',
  '지속적인 대화를 통해 의견을 공유하여 함께 시너지를 낼 수 있는 팀원이 되고자 합니다.',
  '기초적인 백엔드 경험을 통해 협엽 간의 필요로 하는 것에 대한 정확하고 빠른 커뮤니케이션이 가능합니다.'
];
const CREATIVITYTEXT = [
  '개발을 하고자 하는 저의 원동력은 상상하는 것을 코드를 통해 구현하고자 하는 목표입니다.',
  '여러 아이디어를 통해 항상 새로운 것을 시도하고, 이러한 경험을 토대로 효율적인 프로덕트를 제작하고자 합니다.'
];
const GROWTHSTEXT = [
  '문제 해결 등의 다양한 경험을 통해 성장하고 이를 다시 발판으로 삼아 반복적인 성장을 하고자 합니다.',
  '지속적인 학습과 적용을 통해 기술에 익숙해지며, 사용 이유와 작동 원리를 이해하고자 노력합니다.',
  '새로운 기술에 접근시, 필요성 및 사용방식 등의 구체적인 의미를 가져 기술사용에 정확한 이유를 가지고자 합니다.'
];
const SYSTEMATICTEXT = [
  '문제해결을 위해 절차적 순서를 정하고 이를 통해 구체적인 해결 방안을 모색하고자 합니다.',
  '새로운 기술에 대해 접근시, 필요성 및 사용방식 등의 구체적인 의미를 가져 기술사용에 정확한 이유를 가지고자 합니다.'
];

export const TEXTARRAY = [
  COMMUNICATIONTEXT,
  CREATIVITYTEXT,
  GROWTHSTEXT,
  SYSTEMATICTEXT
];

const COMMUNICATIONCOMP = (
  <div>
    <p>BACKEND</p>
    <p>FRONTEND</p>
  </div>
);

const CREATIVITYCOMP = (
  <div>
    <img src='' />
    <p>project idea</p>
  </div>
);

const GROWTHSCOMP = (
  <div>
    <p>SKILLS</p>
    <p>SKILLS</p>
    <p>SKILLS</p>
  </div>
);

const SYSTEMATICCOMP = (
  <div>
    <p>문제해결</p>
  </div>
);

export const DRAGCOMP = [
  COMMUNICATIONCOMP,
  CREATIVITYCOMP,
  GROWTHSCOMP,
  SYSTEMATICCOMP
];

export const name =
  '안녕하세요 저는 사람들에게 멋진 가치를 제공 하는 것을 추구하는 개발자 이상현입니다.';

export const introduction =
  '실제 누구나 사용하는 프로덕트를 개발하여 사람들의 삶의 질을 높여 줄수 있는 개발자가 되고자 하며, 최고의 프로덕트를 위해 최고의 코드를 고민하며, 경험을 통해 성장하며 발전하고자 합니다. 또한, 무엇을? 왜? 어떻게? 라는 프로세스를 통해 문제해결에 대해 자신만의 차별화된 솔루션을 만들고자 하며, 이를위해 새로운 기술을 적극 활용하고 다양한 경험을 쌓아 폭넓은 사고를 보유하고자 합니다.';

export const ProjectDetailText = [
  {
    id: '1',
    param: 'MainPage',
    name: 'Portfolio',
    show: false,
    intro:
      '프론트엔드 공부를 하면서 프로젝트마다 어떤 기술을 공부했는지에 대한 사용 기술과 학습 내용을 담은 웹페이지를 제작했습니다.',
    text2:
      'React를 사용한 첫 번째 프로젝트로 저를 소개하는 포트폴리오 웹페이지입니다.\n현재 진행하고 있거나 완료된 프로젝트를 기재하고 관련 이미지와 코드, 페이지 링크를 포함했습니다.\nReact Hooks 및 State, Router 등의 작동 방식을 익히고 이를 직접 사용해 보며 React에 대해 \n가장 많이 학습하게 된 프로젝트이며, 기록하는 웹페이지로서 주기적으로 업데이트를 진행하여 코드의 유지보수를 하고 있습니다.',
    mission: null,
    img: [port1, port2, port3],
    url: 'https://francesco419.github.io/MainPage',
    github: 'https://github.com/francesco419/MainPage',
    contribution: '개인 프로젝트',
    created: '04.2022',
    LastUpdate: '04.19.2023',
    program: ['React', 'Redux Toolkit'],
    result: [
      '동적 코드 작성으로 유지 보수 및 수정 작업 중 오류를 사전에 감지하지 못하여 문제에 대한 해결 방안을 찾기까지 불필요한 시간 낭비의 경험으로 정적 타입 언어의 필요성을 자각하여 이후 Typescript 적극 사용하게 되는 계기',
      'Virtual DOM의 작동 이해 및 이를 효과적으로 사용하기 위한 최적의 렌더링 방식에 대해 학습 및 응용',
      '요구되는 적절한 애니메이션을 CSS의 keyframe / transition 및 자바스크립트 애니메이션을 통해 구현',
      '다양한 사용자 행동에 따라 반응하는 JSX 이벤트 처리'
    ],
    prev: false,
    next: 'Youtube'
  },
  {
    id: '2',
    param: 'Youtube',
    name: 'Youtube Clone',
    show: true,
    intro:
      '유튜브를 클로닝 한 프로젝트입니다. 가장 활발히 사용되는 웹사이트를 클로닝 함으로서 유튜브 UI를 직접 구현했습니다',
    text2:
      '현재 가장 많이 사용되고 있는 페이지 중 하나인 유튜브를 Youtube API를 사용하여 유튜브에 있는 각각의 페이지 및 여러 기능들을 구현한 프로젝트입니다. 이 프로젝트를 통해 API를 다루는 능력을 향상시키게 되었으며, 프로젝트를 진행하면서 이전에 작업했던 프로젝트보다 훨씬 더 많은 오류 및 요구사항에 부딪히고\n이를 능숙하게 해결하여 여러 요구사항에 대해 다양한 방식으로 접근하여 조건을 만족시킬 수 있는 코드를 구현하는 능력을 키운 프로젝트입니다.',
    mission: null,

    img: [youtube1, youtube2, youtube3],
    url: 'https://francesco419.github.io/Youtube/',
    github: 'https://github.com/francesco419/Youtube',
    contribution: '개인 프로젝트',
    created: '05.2022',
    LastUpdate: '06.25.2022',
    program: ['React', 'CSS Module'],
    result: [
      '수많은 Open API 호출 및 사용을 통해, 데이터 통신 및 비동기적 처리 방식에 대해 학습',
      '클로닝 대상 웹사이트를 분석함으로써 HTML, CSS의 구성 및 작성 이해도를 높이고, 이를 바탕으로 직접 구현',
      'API의 데이터를 일차원적으로 표현하기보다 편집 및 가공을 통해 의도한 데이터로 새로 구성하여 표현'
    ],
    prev: 'MainPage',
    next: 'Travel'
  },
  {
    id: '3',
    param: 'Travel',
    name: 'Travel Away',
    show: true,
    intro:
      '코로나 이후 여행 수요의 증가로 각 국가의 기본 정보를 소개할 수 있는 웹페이지를 제작했습니다.',
    text2:
      '코로나 이후 여행 수요의 증가로 여행을 계획하는 사용자들을 위해 제작을 계획하게 된 프로젝트로서, \n각 국가의 여러 정보를 소개하는 웹페이지로 기본 정보, 여행 경보, 환율 등의 정보를 제공하며, 지속적으로 아이템 및 풍부한 정보를 담을 수 있는 웹 페이지가 될 수 있도록 지속적인 업데이트를 실행하고 있습니다.',
    mission: null,
    img: [travel1, travel2, travel3],
    url: 'https://francesco419.github.io/Travel/',
    github: 'https://github.com/francesco419/Travel',
    contribution: '개인 프로젝트',
    created: '12.2022',
    LastUpdate: '02.08.2023',
    program: ['React', 'CSS Module'],
    result: [
      '사용자에게 유용한 정보를 제공할 수 있는 UI에 대해 깊게 고민하고 구상한 기능을 직접 구현',
      '컴포넌트 간의 상태 값 및 상태 관리 함수의 prop drilling으로 인한 코드 구성 복잡 및 가독성 저하에 대한 대체 기술 필요성으로서 이후 프로젝트에서 Redux 적극 사용 '
    ],
    prev: 'Youtube',
    next: 'post_typescript_redux'
  },
  {
    id: '4',
    param: 'post_typescript_redux',
    name: 'Social Network',
    show: true,
    intro:
      '프론트엔드와 백엔드의 기술을 사용하여 회원가입, 로그인, 게시물 등록 등의 기능을 포함한 SNS 형태의 웹페이지입니다.',
    text2:
      '실제 직무에서는 프론트엔드와 백엔드의 협업이 필수적이기에 기초적인 백엔드의 기술들을 학습하여 프론트엔드에서 서버로 요청, 백엔드에서 받은 요청을 수행, 데이터를 DB에 저장 및 읽어와서 프론트엔드에 표현하는 전체적인 통신 및 데이터 교환에 대한 학습을 목표로 한 프로젝트입니다.\n이를 바탕으로 로그인, 회원가입, 게시물 관리 등 백엔드와의 통신이 비교적 활발한 SNS 형태의 프로젝트를 진행하게 되었습니다.',
    mission: null,
    img: [social1, social2, social3, social4],
    url: '',
    github: 'https://github.com/francesco419/post_typescript_redux',
    contribution: '개인 프로젝트',
    created: '01.2023',
    LastUpdate: '02.28.2023',
    program: ['React', 'TypeScript', 'SCSS', 'Redux', 'NodeJS', 'MySQL'],
    result: [
      '**Axios Interceptor**를 통해 반복적인 코드 사용을 줄여 **재사용화 및 공통적인 에러 처리**를 담당하여 **가독성 높은 코드**를 작성',
      '**Redux Toolkit**을 **사용한 상태 관리 및 유지 보수성**을 높이고 **props 복잡도**를 개선 및 redux persist로 사용빈도가 **높은 데이터의 반복적인 데이터통신 회피**',
      '**NodeJS, MySQL, Express를 사용한 백엔드를 구성** 및 CORS 처리, 쿼리를 통한 DB 관리, 이미지 파일 저장 및 데이터 통신 경험',
      '**Lazy, Suspense를 적용한 코드 분할**을 통해 페이지 성능 최적화 및 lighthouse를 통한 웹 페이지 평가를 통해 지속적으로 최적화 방법을 모색'
    ],
    prev: 'Travel',
    next: 'BrainBomb'
  },
  {
    id: '5',
    param: 'BrainBomb',
    name: 'MindMap',
    show: true,
    intro:
      '사용자와 보다 더 상호작용을 할 수 있는 기능을 가진 마인드맵을 구성할 수 있는 웹사이트 제작, 서로 상관관계에 있는 여러 코드들의 복잡한 구성과 이에대한 연쇄적인 오류 해결능력',
    text2:
      '기존 마인드맵 웹사이트의 회원가입,로그인과 복잡한 가이드 등의 불편함을 해소하고자 남녀노소 누구나 보기에 직관적이고 쉽게 마인드맵을 구성할 수 있도록 해당 프로젝트를 시작하였습니다. 서버통신없이 오직 기능적인 부분만을 고려하여 제작하게 되었고, 이 프로젝트를 진행하면서 일반적인 웹사이트와 다른 기능적인 면을 제공하는 분야에 관심을 가지게 되었고 특히 발생하는 연쇄적인 오류에 문제를 파악하고 능숙하게 해결하는 실력을 크게 향상하는 계기가 되었습니다.',
    mission: null,
    img: [mindmap1, mindmap2, mindmap3],
    url: 'https://keen-nasturtium-541fc9.netlify.app',
    github: 'https://github.com/francesco419/BrainBomb',
    contribution: '개인 프로젝트',
    created: '03.2022',
    LastUpdate: '04.19.2023',
    program: ['React', 'TypeScript', 'SCSS', 'Lodash', 'Redux Toolkit'],
    result: [
      '일부 컴포넌트에 대해 **Style-in-component**를 통해 **재사용성이 높은** 컴포넌트의 일관성있고 **통일된 스타일**을 제공할 수 있도록 하였습니다.',
      '**Redux를 통해** 단순 상태관리보다 해당 **상태에 관한 복잡한 연계기능을 효율적**으로 풀어내어 프로젝트 전반의 사용자경험의 향상을 야기시켰습니다',
      '**Lodash 라이브러리**의 적극적인 사용을 통해 기존 바닐라JS에서 따로 제공하지 않는 다양한 함수를 효과적으로 사용하여 **복잡한 연계성이 있는 데이터들을 보다 효율적으로 가공**할수 있었습니다.',
      '마인드맵의 여러 요소들로 인해 발생하는 **연쇄적인 오류에 대해 해당 원인의 문제점을 파악하고 이를 순차적으로 해결**하는 문제해결 능력을 키우게 되었습니다.'
    ],
    prev: 'post_typescript_redux',
    next: 'FINEDITION_WORK'
  },
  {
    id: '5',
    param: 'FINEDITION_WORK',
    name: 'Finedition',
    show: true,
    intro:
      '현직 디자이너와 협업하여 창업을 준비하는 사람의 요구에 맞춰 사업의 기반이 될 수 있는 웹페이지의 프로토타입을 제작, 한국 관광공사에서 진행하는 공모전에서 수상',
    text2:
      '현재까지 익힌 기술들을 토대로 현직 디자이너와 협업하여 의뢰자의 요구에 맞게 디자인, 기능 등 웹페이지의 모든 요소를 제작하였습니다. 프로젝트 진행과정에 있어 협업에 대한 경험과 이해를 쌓고, 요구사항에 대해서는 이를 어떻게 구현할지에 대한 문제를 토의를 통해 만족할 수 있는 해결책을 찾고, 다양한 오류들을 해결해가는 시간들을 통해 풀어야할 다양한 형태의 문제에 보다 능숙한 처리 능력을 가지고자 임했습니다.',
    mission: null,
    img: [finedition_home, finedition_food, finedition_place, finedition_seoul],
    url: 'https://finedition.kr/',
    github: 'https://github.com/francesco419/FINEDITION_WORK',
    contribution: '팀 프로젝트',
    created: '03.2022',
    LastUpdate: '04.19.2023',
    program: [
      'React',
      'TypeScript',
      'SCSS',
      'Lodash',
      'Redux Toolkit',
      'NodeJs',
      'MySQL',
      'Express',
      'AWS',
      'Figma'
    ],
    result: [
      '**디자이너와 Figma를 통한 협업**을 통해 시각적 웹 개발을 원활하게 진행했습니다. Figma를 활용하여 디자인 파일을 **공유하고 실시간으로 협업**하며, **개발과 디자인 간의 원활한 의사소통**을 도모하여 프로젝트의 일관성과 효율성을 높였습니다.',
      '**Google Login API**를 활용하여 강력한 **사용자 인증 시스템을 구축**했습니다. 사용자 편의성과 보안을 고려하여 **손쉬운 로그인 경험**을 제공하며, 개인정보 관리에 대한 효과적인 솔루션을 확보했습니다.',
      '**Kakao Map API**를 활용하여 지리적 **데이터 시각화**를 강화했습니다. 다양한 지도 기능을 통해 사용자에게 직관적이고 효과적인 지리 정보를 제공하며, **애플리케이션의 사용자 경험을 향상**시켰습니다.',
      '프론트와 백엔드의 **서버를 분리배포**하여 시스템 유연성을 향상시켰습니다. 클라이언트와 **서버 간의 독립성을 유지**하면서, 효율적인 확장과 업데이트를 가능케 하여 개발 생산성과 안정성을 동시에 향상시켰습니다.',
      '**AWS 서비스**를 사용하여 안정적이고 확장 가능한 개발 환경을 조성했습니다. 다양한 **클라우드 기술을 활용**하여 **서버 관리 및 인프라 구축**을 효율적으로 수행하고, 안전한 데이터 저장 및 전송을 보장하였습니다.',
      '**Scss와 SVG를 결합**하여 Interactive한 개발을 경험했습니다. Scss를 활용하여 스타일링을 효율적으로 구성하고, SVG를 활용하여 **다양한 그래픽 요소를 삽입하며 상호작용성**을 부여했습니다. 이를 통해 독특하고 다이내믹한 웹 페이지를 만들어 사용자 경험을 높였습니다.',
      '정규표현식을 **사용한 검증을 통해 입력 데이터의 유효성을 강화**했습니다. 사용자의 입력이 지정한 양식과 일치하는지 확인하여 **데이터의 정확성을 보장**하고, 보안 측면에서도 적절한 검증을 수행하여 **안전한 데이터 처리**를 실현했습니다.'
    ],
    prev: 'BrainBomb',
    next: false
  }
];

export const ProjectTXT = [
  {
    id: 0,
    imgs: youtube1,
    eng: 'Youtube Clone',
    title: '유튜브 클론',
    text: 'Youtube API를 사용하여 유튜브의 페이지 및 기능을 제작한 프로젝트로,\n React를 기반으로 제작하였습니다.'
  },
  {
    id: 1,
    imgs: travel1,
    eng: 'TravelAway',
    title: '여행정보사이트',
    text: '여러 국가의 일반정보, 여행경보, 환율 등\n코로나 시국 이후에 여행을 준비하는 사람들을 위한\n여행정보 사이트를 제작했습니다.'
  },
  {
    id: 2,
    imgs: social1,
    eng: 'Movie Theater',
    title: '영화 모음집',
    text: '영화의 간단한 내용과 러닝타임, 포스터와\n배우의 정보를 담아 다양한 영화를 소개하는\n영화 모음 프로젝트로 HTML, CSS,\nJavaScript 와 React를 사용해 제작했습니다.'
  },
  {
    id: 3,
    imgs: port1,
    eng: 'My Portfolio',
    title: '나의 포트폴리오',
    text: '개인 포트폴리오를 제작한 프로젝트로\n HTML, CSS, JS와 REACT를 사용했습니다'
  }
];

export const myProjects = [
  {
    name: 'Finedition',
    text: '예비 창업자의 요구에 맞춰 현직 디자이너와 협업하여 프로토타입을 제작, 관광공사 공모전에 참여하여 최우수상을 수상 하게 되었습니다.',
    img: finedition_home,
    to: 'FINEDITION_WORK'
  },
  {
    name: 'MindMap',
    text: '사용자와 보다 더 상호작용을 할 수 있는 기능을 가진 마인드맵을 구성할 수 있는 웹사이트 제작했습니다.',
    img: mindmap1,
    to: 'BrainBomb'
  },
  {
    name: 'Social Network',
    text: '프론트엔드와 백엔드의 기술을 사용하여 회원가입, 로그인, 게시물 등록 등의 기능을 포함한 SNS형태의 웹페이지입니다.',
    img: social1,
    to: 'post_typescript_redux'
  },
  {
    name: 'YouTube',
    text: '유튜브를 클로닝 한 프로젝트입니다. 가장 활발히 사용되는 웹사이트를 클로닝 함으로서 API를 활용한 기능 및 UI를 직접 구현했습니다.',
    img: youtube1,
    to: 'Youtube'
  }
];

export const SkillsText = [
  {
    id: 0,
    text: '</skills>'
  },
  {
    id: 1,
    text: '총 8개의 개발언어 사용이 가능하며,\n 그 중에서도 Frontend 개발관련\n HTML, CSS, JavaScript와\n React를 메인으로 사용합니다.'
  }
];

export const IntroText = {
  id: 0,
  name: 'strength',
  text: [
    '더 좋은 아이디어를 위해 끊임없이 고민하고 적극적으로 의견을 나누는 자세',
    '피드백을 듣고 개선하려는 노력과 변화에 민첩하게 반응하는 자세',
    '항상 새로운 기술에 대해 긍정적이며 이를 통해 업무 능력을 발전시키는 자세'
  ]
};

import movie1 from "../picture/movie.PNG";
import movie2 from "../picture/movie1.PNG";
import movie3 from "../picture/movie2.PNG";
import greeting1 from "../picture/greeting.PNG";
import greeting2 from "../picture/greeting1.PNG";
import insta from "../picture/insta.PNG";
import calc from "../picture/calc.PNG";
/**portfolio*/
import port1 from "../picture/projectImgNew/portfolio/1.PNG";
import port2 from "../picture/projectImgNew/portfolio/2.PNG";
import port3 from "../picture/projectImgNew/portfolio/3.PNG";
import port4 from "../picture/projectImgNew/portfolio/4.PNG";
import port5 from "../picture/projectImgNew/portfolio/5.PNG";
/**youtube */
import youtube1 from "../picture/projectImgNew/youtube/youtube1.PNG";
import youtube2 from "../picture/projectImgNew/youtube/youtube2.PNG";
import youtube3 from "../picture/projectImgNew/youtube/youtube3.PNG";
/**travel */
import travel1 from "../picture/projectImgNew/travel/1.PNG";
import travel2 from "../picture/projectImgNew/travel/2.PNG";
import travel3 from "../picture/projectImgNew/travel/3.PNG";
/**social */
import social1 from "../picture/projectImgNew/sns/1.PNG";
import social2 from "../picture/projectImgNew/sns/2.PNG";
import social3 from "../picture/projectImgNew/sns/3.PNG";
import social4 from "../picture/projectImgNew/sns/4.PNG";

export const ProjectDetailText = [
  {
    id: "01",
    name: "Personal Portfolio",
    intro:
      "프론트엔드 공부를 하면서 프로젝트마다 어떤 기술을 공부했는지에 대한 사용 기술과 학습 내용을 담은 웹페이지를 제작했습니다.",
    text2:
      "React를 사용한 첫 번째 프로젝트로 저를 소개하는 포트폴리오 웹페이지 입니다.\n 현재 진행하고 있거나 완료된 프로젝트를 기재하고 관련 이미지와 코드, 페이지 링크를 포함했습니다.\n React Hooks 및 State, Router 등의 작동 방식을 익히고 이를 직접 사용해 보며 React에 대해 학습을 가장 많이 하게된 프로젝트입니다.\n 기록하는 웹페이지로서 주기적으로 업데이트를 진행하여 코드의 유지보수를 하고 있습니다.",
    img: [port1, port2, port3, port4, port5],
    url: "https://francesco419.github.io/MainPage",
    github: "https://github.com/francesco419/MainPage",
    contribution: "개인 프로젝트",
    created: "04.2022",
    LastUpdate: "02.09.2023",
    program: ["React", "CSS Module", "Redux Toolkit", "Javascript"],
    result: [
      "React와 JSX 문법을 학습하고, 이를 사용한 SPA 개발이 능숙하게 발전",
      "CSS Module을 사용한 Selector의 중첩이 없는 모듈화된 스타일링 작성",
      "React 컴포넌트의 라이프사이클 및 Hooks의 이해",
    ],
  },
  {
    id: "02",
    name: "Youtube Clone",
    intro:
      "유튜브를 클로닝 한 프로젝트입니다. 가장 활발히 사용되는 웹사이트를 클로닝 함으로서 유튜브 UI를 직접 구현했습니다",
    text2:
      "현재 가장 많이 사용되고 있는 페이지중 하나인 유튜브를 Youtube API를 사용하여 유튜브에 있는 각각의 페이지 및 여러 기능들을 구현한 프로젝트입니다.\n이 프로젝트를 통해 API를 다루는 능력을 향상시키게 되었으며, 프로젝트를 진행하면서 이전에 작업했던 프로젝트보다\n 훨씬 더 많은 오류 및 요구사항에 부딪히고 이를 능숙하게 해결하여 여러 요구사항에 대해\n 다양한 방식으로 접근하여 조건을 만족시킬수 있는 코드를 구현하는 능력을 키운 프로젝트입니다.",
    img: [youtube1, youtube2, youtube3],
    url: "https://francesco419.github.io/Youtube/",
    github: "https://github.com/francesco419/Youtube",
    contribution: "개인 프로젝트",
    created: "05.2022",
    LastUpdate: "06.25.2022",
    program: ["React", "CSS Module", "Javascript"],
    result: [
      "Axios를 적용해 Open Api를 호출하고 데이터 수정을 통한 유기적인 사용이 능숙",
      "UI에 대한 이해 및 구현하고자 하는 UI를 나만의 코드를 통해 구현 가능",
      "중복되는 기능의 함수화 및 컴포넌트화를 통한 코드 분량 축소와 간략화",
    ],
  },
  {
    id: "03",
    name: "Travel Away",
    intro:
      "코로나 이후 여행 수요의 증가로 각 국가의 기본 정보를 소개할 수 있는 웹페이지를 제작했습니다.",
    text2:
      "코로나 이후 여행 수요의 증가로 여행을 계획하는 사용자들을 위해 제작을 계획하게 된 프로젝트로서 \n 각 국가의 여러 정보를 소개하는 웹페이지로 기본 정보, 여행 경보, 환율 등의 정보를 제공하며, 지속적으로 아이템 및 풍부한 정보를 담을 수 있는 웹 페이지가 될 수 있도록 지속적인 업데이트를 실행하고 있습니다.",
    img: [travel1, travel2, travel3],
    url: "https://francesco419.github.io/Travel/",
    github: "https://github.com/francesco419/Travel",
    contribution: "개인 프로젝트",
    created: "12.2022",
    LastUpdate: "02.08.2023",
    program: ["React", "CSS Module", "Javascript"],
    result: [
      "사용자의 입장에서 생각하고 제작하려고 하는 사용자 경험을 중시하는 마인드",
      "컴포넌트 간의 props 전달 방식에 대한 효율적인 대책의 필요성을 자각",
      "Responsively 프로그램을 사용하여 반응형 웹 제작 능력",
      "만들고자 하는 주제에 대한 필요한 정보 수집능력 및 필요한 기능들에 대한 구현 능력",
    ],
  },
  {
    id: "04",
    name: "Social Network",
    intro:
      "프론트엔드와 백엔드의 기술을 사용하여 회원가입, 로그인, 게시물 등록 등의 기능을 포함한 SNS형태의 웹페이지 입니다.",
    text: "실제 직무에서는 프론트엔드와 백엔드의 협업이 필수적이기에 새로 학습한 기술을 사용하고, 기초적인 백엔드를 구현하여 협업에서의 기초적인 지식 및 경험을 목표로 한 SNS 웹페이지를 제작하고 있습니다.",
    text2:
      "실제 직무에서는 프론트엔드와 백엔드의 협업이 필수적이기에 기초적인 백엔드의 기술들을 학습하여 프론트엔드에서 서버로 요청,\n 백엔드에서 받은 요청을 수행, 데이터를 DB에 저장 및 읽어와서 프론트엔드에 표현하는 전체적인 통신 및 데이터 교환에 대한 학습을 목표로한 프로젝트입니다.\n 이를 바탕으로 로그인, 회원가입, 게시물 관리 등 백엔드와의 통신이 비교적 활발한 SNS형태의 프로젝트를 진행하게 되었습니다.",
    img: [social1, social2, social3, social4],
    url: "",
    github: "https://github.com/francesco419/post_typescript_redux",
    contribution: "개인 프로젝트",
    created: "01.2023",
    LastUpdate: "02.09.2023",
    program: ["React", "TypeScript", "SCSS", "Redux"],
    result: [
      "Typescript로 정적 타입 언어의 코드 작성 및 타입의 오류의 수정이 능숙해짐.",
      "Redux Toolkit를 사용한 상태 관리 및 유지 보수성을 높이고 props 복잡도를 개선",
      "SCSS의 중첩, 연산자 등 기술적 장점을 활용한 사용법을 학습하여 적용.",
      "Axios Interceptor를 적용해 코드 재사용화로 복잡도 해결 및 에러 처리 방법을 학습하여 적용.",
      "데이터 및 파일 등 백엔드와의 데이터 교환을 학습하고 교환한 데이터에 대한 처리 능력 및 이해도의 향상",
    ],
  },
  {
    id: "05",
    name: "Greeting\nWeb Page\nProject",
    text: "NomadCoder의 강의를 수강하며 시작하게된 프로젝트로서, OpenWeatherMap API를\n 통해 위치정보에따른 날씨정보 가져오기, 할 일 정보를 입력받아 로컬스토리지에\n 저장하기 및 삭제 등의 기능을 사용하여 페이지를 제작하였습니다.\n 처음으로 API를 사용하였으며, 이를 계기로 다른 API들을 이용해 실질적으로\n 다양한 페이지를 제작하고자 하는 생각?을 하였습니다. 또한 백엔드를 사용하지 않고,\n 로컬스토리지를 사용함으로서 기본적인 데이터저장을 경험해볼 수 있어 백엔드의\n 필요성을 더욱 느끼게 된 프로젝트이다.",
    img: [greeting1, greeting2],
    url: null,
    github: "https://github.com/francesco419/tp_Greetings",
    contribution: "개인 프로젝트",
    program: "HTML, CSS, JS",
  },
  {
    id: "06",
    name: "Calculator\nProject",
    text: "첫 프로젝트로 HTML, CSS, JavsScript의 사용 및 경험을 목표로한 프로젝트로서,\n 기본적인 계산기의 외형 및 레이아웃을 HTML, CSS로 구현하고 계산식의\n 처리를 Javascript를 통하여 구현했습니다avascript를 사용한\n 계산처리방식에서 사칙연산 순서에 의한 연산을 구현하였습니다.",
    img: [calc],
    url: null,
    github: "https://github.com/francesco419/tp_Calculator",
    contribution: "개인 프로젝트",
    program: "HTML, CSS, JS",
  },
  {
    id: "07",
    name: "Instagram\nWeb Clone\nProject",
    text: "이 프로젝트는 프론트엔드를 배우는 과정에서, 현재 많이 사용되고 있는\n 웹사이트에서 어떠한 방식으로 구조 및 레이아웃을 구현하는지 알아 보기위한 프로젝트로서,\n 인스타그램의 프로필 페이지의 외형적인 것에 중점을 두고 제작한 클론페이지입니다.",
    img: [insta],
    url: null,
    github: "https://github.com/francesco419/WebClone_Instagram",
    contribution: "개인 프로젝트",
    program: "HTML, CSS",
  },
  {
    id: "08",
    name: "Movie Theater\nProject",
    text: "NomadCoder의 강의의 수강 결과물로서 만들게 된 프로젝트로서, React를 처음으로\n 사용한 프로젝트입니다. 현재 가장 많이 사용되고 있는 라이브러리인 만큼,\n 여러 가지 편의성 및 기능들을 사용해보면서 왜 많이 사용되고 있는지를\n 직접 알 수 있었던 프로젝트였습니다. 특히 라우트 기능을 통해서\n 페이지 로딩이 아닌 페이지전환과 같은 기능의 유용성을 알게 된 프로젝트입니다.",
    img: [movie1, movie2, movie3],
    url: "https://francesco419.github.io/tp_Movie",
    github: "https://github.com/francesco419/tp_Movie",
    contribution: "개인 프로젝트",
    program: "REACT, CSS Module",
  },
];

export const ProjectTXT = [
  {
    id: 0,
    imgs: youtube1,
    eng: "Youtube Clone",
    title: "유튜브 클론",
    text: "Youtube API를 사용하여 유튜브의 페이지 및 기능을 제작한 프로젝트로,\n React를 기반으로 제작하였습니다.",
  },
  {
    id: 1,
    imgs: travel1,
    eng: "TravelAway",
    title: "여행정보사이트",
    text: "여러 국가의 일반정보, 여행경보, 환율 등\n코로나 시국 이후에 여행을 준비하는 사람들을 위한\n여행정보 사이트를 제작했습니다.",
  },
  {
    id: 2,
    imgs: movie1,
    eng: "Movie Theater",
    title: "영화 모음집",
    text: "영화의 간단한 내용과 러닝타임, 포스터와\n배우의 정보를 담아 다양한 영화를 소개하는\n영화 모음 프로젝트로 HTML, CSS,\nJavaScript 와 React를 사용해 제작했습니다.",
  },
  {
    id: 3,
    imgs: port1,
    eng: "My Portfolio",
    title: "나의 포트폴리오",
    text: "개인 포트폴리오를 제작한 프로젝트로\n HTML, CSS, JS와 REACT를 사용했습니다",
  },
];

export const SkillsText = [
  {
    id: 0,
    text: "</skills>",
  },
  {
    id: 1,
    text: "총 8개의 개발언어 사용이 가능하며,\n 그 중에서도 Frontend 개발관련\n HTML, CSS, JavaScript와\n React를 메인으로 사용합니다.",
  },
];

export const IntroText = {
  id: 0,
  name: "strength",
  text: [
    "더 좋은 아이디어를 위해 끊임없이 고민하고 적극적으로 의견을 나누는 자세",
    "피드백을 듣고 개선하려는 노력과 변화에 민첩하게 반응하는 자세",
    "항상 새로운 기술에 대해 긍정적이며 이를 통해 업무 능력을 발전시키는 자세",
  ],
};

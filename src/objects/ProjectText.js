import port1 from "./picture/portfolio.PNG";
import port2 from "./picture/portfolio2.PNG";
import port3 from "./picture/portfolio3.PNG";
import movie1 from "./picture/movie.PNG";
import movie2 from "./picture/movie1.PNG";
import movie3 from "./picture/movie2.PNG";
import greeting1 from "./picture/greeting.PNG";
import greeting2 from "./picture/greeting1.PNG";
import insta from "./picture/insta.PNG";
import calc from "./picture/calc.PNG";
import y1 from "./picture/youtube1.PNG";
import y2 from "./picture/youtube2.PNG";
import y3 from "./picture/youtube3.PNG";

export const ProjectDetailText = [
  {
    id: 1,
    name: "Travel\nAway\nProject",
    text: "이제 곧 코로나 시국이 끝나가는 시점에서 가장 많은 관심을 받게 될 요소는 여행이라고 생각되어, 공공데이터포털의 API를 이용해 각국의 일반정보, 여행경보, 환율 등 여러가지 정보를 간편하게 조회할 수 있는 웹페이지를 만드는 프로젝트이다.\n 이전 프로젝트들과는 클론프로젝트나 포트폴리오를 위한 프로젝트가 아닌 사이트 배포시 일반 사람들이 유용하게 사용할 수 있는 사이트를 목적으로 진행하였으며,\n 특히 간편하고 쉬운 인터페이스를 구현함으로서 복잡함 없이 남녀노소 누구나 쉽게 접근할 수 있도록 하였다.",
    img: [null],
    url: "https://francesco419.github.io/Travel/",
    github: "https://github.com/francesco419/Travel",
    contribution: "Working on Process~",
    program: "HTML, CSS, JS, REACT",
    period: "Working on Process",
  },
  {
    id: 2,
    name: "Youtube\nClone\nProject",
    text: "현재 가장 많이 사용되고 있는 페이지중 하나인 유튜브를 Youtube API를 사용하여 유튜브에 있는 각각의 페이지 및 여러 기능들을 구현한 프로젝트이다.\n이 프로젝트를 통해 API data를 다루는 능력을 향상시키게 되었으며, 프로젝트를 진행하면서 이전에 작업했던 프로젝트보다\n 훨씬 더 많은 오류 및 요구사항에 부딪히게 되었고. 이를 통해 오류를 능숙하게 해결하고 여러 요구사항에 대해\n 다양한 방식으로 접근하여 조건을 만족시킬수 있는 코드를 구현하는 능력을 키운 프로젝트이다.\n프로젝트를 진행하면서 생긴 오류 및 진행상황을 깃헙 프로젝트 페이지의 README에 작성하였다.",
    img: [y1, y2, y3],
    url: "https://francesco419.github.io/Youtube/",
    github: "https://github.com/francesco419/Youtube",
    contribution: "개인 프로젝트",
    program: "HTML, CSS, JS, REACT",
    period: "2 month",
  },
  {
    id: 3,
    name: "Greeting\nWeb Page\nProject",
    text: "NomadCoder의 강의를 수강하며 시작하게된 프로젝트로서, OpenWeatherMap API를\n 통해 위치정보에따른 날씨정보 가져오기, 할 일 정보를 입력받아 로컬스토리지에\n 저장하기 및 삭제 등의 기능을 사용하여 페이지를 제작하였습니다.\n 처음으로 API를 사용하였으며, 이를 계기로 다른 API들을 이용해 실질적으로\n 다양한 페이지를 제작하고자 하는 생각?을 하였습니다. 또한 백엔드를 사용하지 않고,\n 로컬스토리지를 사용함으로서 기본적인 데이터저장을 경험해볼 수 있어 백엔드의\n 필요성을 더욱 느끼게 된 프로젝트이다.",
    img: [greeting1, greeting2],
    url: null,
    github: "https://github.com/francesco419/tp_Greetings",
    contribution: "개인 프로젝트",
    program: "HTML, CSS, JS",
    period: "1 week",
  },
  {
    id: 4,
    name: "Movie Theater\nProject",
    text: "NomadCoder의 강의의 수강 결과물로서 만들게 된 프로젝트로서, React를 처음으로\n 사용한 프로젝트입니다. 현재 가장 많이 사용되고 있는 라이브러리인 만큼,\n 여러 가지 편의성 및 기능들을 사용해보면서 왜 많이 사용되고 있는지를\n 직접 알 수 있었던 프로젝트였습니다. 특히 라우트 기능을 통해서\n 페이지 로딩이 아닌 페이지전환과 같은 기능의 유용성을 알게 된 프로젝트입니다.",
    img: [movie1, movie2, movie3],
    url: "https://francesco419.github.io/tp_Movie",
    github: "https://github.com/francesco419/tp_Movie",
    contribution: "개인 프로젝트",
    program: "HTML, CSS, JS, REACT",
    period: "1 week",
  },
  {
    id: 5,
    name: "Personal\nPortfolio\nProject",
    text: "간략화한 자기소개 페이지로서 개인정보 및 보유 스킬과 작업한 프로젝트 등의\n 정보들을 담은 포트폴리오 프로젝트입니다. 이 프로젝트를 진행함에 따라 외부의\n 여러 다양한 라이브러리 및 hook을 사용해보게 되었고 애니메이션 사용이\n 능숙해졌으며 여러 기술들을 사용하는 만큼 발생하는 여러 가지 오류도\n 해결하고 실질적으로 모든 부분에 대해서 기획 제작을 진행한 처음의\n 프로젝트이므로, 이전 작업들을 통틀어 가장 많은 경험을 쌓게 된 프로젝트입니다.",
    img: [port1, port2, port3],
    url: "https://francesco419.github.io/MainPage",
    github: "https://github.com/francesco419/MainPage",
    contribution: "개인 프로젝트",
    program: "HTML, CSS, JS, REACT",
    period: "3 week",
  },
  {
    id: 6,
    name: "Calculator\nProject",
    text: "첫 프로젝트로 HTML, CSS, JavsScript의 사용 및 경험을 목표로한 프로젝트로서,\n 기본적인 계산기의 외형 및 레이아웃을 HTML, CSS로 구현하고 계산식의\n 처리를 Javascript를 통하여 구현했습니다avascript를 사용한\n 계산처리방식에서 사칙연산 순서에 의한 연산을 구현하였습니다.",
    img: [calc],
    url: null,
    github: "https://github.com/francesco419/tp_Calculator",
    contribution: "개인 프로젝트",
    program: "HTML, CSS, JS",
    period: "1 week",
  },
  {
    id: 7,
    name: "Instagram\nWeb Clone\nProject",
    text: "이 프로젝트는 프론트엔드를 배우는 과정에서, 현재 많이 사용되고 있는\n 웹사이트에서 어떠한 방식으로 구조 및 레이아웃을 구현하는지 알아 보기위한 프로젝트로서,\n 인스타그램의 프로필 페이지의 외형적인 것에 중점을 두고 제작한 클론페이지입니다.",
    img: [insta],
    url: null,
    github: "https://github.com/francesco419/WebClone_Instagram",
    contribution: "개인 프로젝트",
    program: "HTML, CSS",
    period: "1 week",
  },
];

export const ProjectTXT = [
  {
    id: 0,
    imgs: y1,
    eng: "Youtube Clone",
    title: "유튜브 클론",
    text: "Youtube API를 사용하여 유튜브의 페이지 및 기능을 제작한 프로젝트로,\n React를 기반으로 제작하였습니다.",
  },
  {
    id: 1,
    imgs: "https://user-images.githubusercontent.com/84317858/158579317-6d81584f-6cce-435f-b6d0-e3dc2c8065a3.PNG",
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

export const IntroText = [
  {
    id: 0,
    name: "strength",
    text: "▷더 좋은 코드를 위해 끊임없이 고민하고 적극적으로 의견을 나누는 자세\n\n▷피드백을 듣고 개선하려는 노력과 변화에 민첩하게 반응하는 자세\n\n▷API Data 사용에 능숙하며 인터페이스와 결합하는 능력\n\n▷새로운 기술에 대한 빠른 적응능력",
  },
];

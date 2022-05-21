===포트폴리오제작===

---

===제작계획===

HEADER - 개인로고 이미지, 몇가지 url 링크, 날씨 indicator

MAIN - 프로젝트 preview, Skills, personal introduction 등

(슬라이드, transform, transition 등의 효과 사용)

FOOTER - contact info, ...

App - Home - Header, Main, Footer - Weacther, Skills, SkillBox

---

===1===

HEADER에 이미지, 메뉴Nav, 날씨 정보 추가.

Error 1.날씨정보 랜더링에 관하여 useEffect를 하지 않으면 한번에 다수의 랜더링 발생으로인해 오류발생. 그러나 useEffect로 한번의 랜더링만 할시 새로고침(F5)사용시 switch문의 default가 적용되는 문제점 발생.

Skills에서 각 이미지에 마우스를 올릴시 description이 나타나도록 transition을 사용했으나, 불필요하다 생각되어 삭제.(=>Skills.js, Skills.module.css)

Skills를 저장할 SkillBox 생성.

---

===2===

각 파트 구분.

SkillBox와 Skills 파트 마무리.

---

===3===

Weather기능은 불필요하다고 판단되 제거.

포트폴리오 구성인만큼 전체적인 레이아웃 및 세부구성을 다시 재구성할 필요가 있음.

Scroll시 각 파트에대한 애니메이션 등의 구동 Hook 생성. useScroll.

보다 javascript를 통한 CSS 조작 및 구현 방식 사용이 필요함.

---

===4===

과도하게 사용된 div 축소 및 제거, Header.module.css의 media요소 추가.

div로 만든 박스에 img를 넣은 상태로 div에 hover를 주어 애니메이션을 추가하는데에 문재발생.

    <div className={styles.a}>
        <img src={image}/>
    </div>

    .a {
    transition: scale 1s;
    transform: scale(1);
    }

    .a :hover {
    transform: scale(2);
    }

위 상태로 코드를 실행시킬시 transition 속성이 적용안됨.

    transition: scale 1s;

transition을 hover에 옮기면 hover시에는 transition이 정상적으로 적용되지만, hover상태에서 마우스를 밖으로 빼는 애니메이션에는 transition이 적용안됨.

문제의 해결 방법은

    <img src={image}>

에 대한 css 속성에 transition 속성을 넣게되면
hover-unhover시에 transition 속성이 전부다 적용되는것을 알 수 있다.

#전체적인 레이아웃의 변경 및 구성 재조정 필요#

---

===5===

레이아웃 수정.

스크롤을 이용한 섹션자동 전환 사용.

    scroll-snap-type: y mandatory;

    scroll-snap-align: start;

type은 container에, align은 내부요소 css에 넣어주면 된다.

---

===6===

전체적인 디자인계획 변경으로 Skills에 관한 이전 작업들을 전부 폐기하기로함.

:hover 와 transform을 사용하여 뒤집히는 모션을 사용한 Skill카드를 제작.

앞면에는 각각 스킬아이콘을, 뒷면에는 내가 가지고 있는 스킬에 대한 설명을 작성.

스크롤에 따라 컨텐츠가 보이는 방식에 Fade-효과를 주기위해서 Aos 라이브러리를 추가하였다.

왼쪽상단에 현재 위치한 섹션의 위치를 표시하는 Indicator를 추가하였다.

---

===7===

IntersectionObserver를 사용하여 본문 각 파트에 대한 visible 데이터를 통하여 각 세션이 뷰에 위치할때 해당 사이드 바의 BackgroudColor에 변화를 주어 사용자가 자신이 어느 위치에 있는 파트를 현재 보고있는지 알 수있는 컴포넌트를 제작 하였다.

과도하게 사용된 div 엘리먼트 제거 및 축소화.

(항상 컴포넌트를 박스화 해서 생각하다 보니 과도하게 div를 많이 사용하는 잘못된 습관이 생긴듯함. 무분별한 사용 금지.)

타 사이트를 통한 소개 및 연락가능한 수단들을 넣은 Contact페이지 제작.

---

===8===

간략화.

---

===9===

프로젝트에대한 상세설명을 보여주는 ProjectDetail.js생성

Home에서 보여지는 Project를 생성하는 Project.js생성

Home에서 보여지는 Skill을 생성하는 Skill.js생성

---

===10th===

text - 포트폴리오 내용 및 텍스트정리.

---

===Final A/B/C/D ===

레이아웃 및 페이지디자인 최종확정 및 작업.

Cover / Intro / Skill / Project / ProjectDetail 4가지로 최종분류.

Skill부분에서 텍스트스크롤링 파트 보완필요.

텍스트스크롤링과 같은 효과를 만들기위해 현재 2가지 방식 구현.

- 1.각 div에 들어가는 텍스트를 배열 state와 useInterval을 이용하여 일정시간마다 배열의 순서를 교체 및 useEffect를 통한 랜더링...단점으로는 비교적 딱딱한 교체모션.

- 2.overflow를 이용하여 overflow된 부분을 translateY를 통하여 움직임을 주어 비교적 부드러운 모션을 주고, translate해야할 길이가 끝날 부분에는 타이밍에 맞추어 처음위치로 초기화...단점으로는 명확한 강조를 넣지못함.

모바일사용을 고려한 @media사용. 위치조정 및 컴포넌트 변화.

로딩페이지 제작

- 로딩페이지에서 그려지는 선을 animation을 이용해 width를 조정하는 방식으로 왼->오 또는 오->왼 으로의 애니메이션 효과를 주려했으나, 애니메이션 자체가 왼->오 의 설정이 기본인지 animation-direction을 사용해도 변함이 없음. 따라서 overflow를 hidden으로 설정하고, translateX를 통해 양쪽에서 설정한 범위안으로 들어오는 효과를 넣음으로서 보여지고자 하는 방식의 애니메이션 효과를 구현 할 수 있었다.

- 0~100%로 보여지는 로딩프로세스카운트는 위 텍스트스크롤링에서 사용한 방식을 비슷하게 적용하여 임의적으로 설정한 로딩화면시간/100을 계산한 값을 useInterval값으로 주도록하여 결과적으로 로딩화면시간과 보여지는 애니메이션과 퍼센트카운드값이 의도한대로 실행되는것을 구현할 수 있었다. 다만 카운트를 100이 넘어가지 않도록 설정하지 않으면 100을 초과하기에 if문을 사용해 카운트가 100에 도달하면 멈추도록 설정하였다. 다만, useInterval에서 실행하는 시간이 짧다보니 값===100 을 하면 카운트가 101에 도달하기에 값===99로 설정하였다.

Sidemenu와 관련 부분 위치 조정 및 ProjectDetail의 깃헙 아이콘 제거

페이지의 타이틀 및 탭 아이콘 변경.

project섹션의 제일 하단에 깃헙링크 추가.

로딩페이지가 보여지는 시간 수정.

===Final E===

유튜트 프로젝트 추가.

info페이지에 내용 추가 및 세부사항 조정

ProjectDetail페이지에서 뒤로가기를 하면 로딩화면이 또 나타나는 현상 발생. State를 설정해 SessionStorage에 로딩페이지에 대한 데이터를 저장해 페이지를 닫지 않는 한 로딩페이지가 다시 로드되지 않도록 설정해였다.

ProjectDetail페이지에 프로젝트 url이 존재한다면, 나타나는 링크를 제작하였다.

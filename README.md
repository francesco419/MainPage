===개인 페이지 제작===

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

과도하게 사용된 <div> 축소 및 제거, Header.module.css의 media요소 추가.

\*div로 만든 박스에 img를 넣은 상태로 div에 hover를 주어 애니메이션을 추가하는데에 문재발생.

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

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

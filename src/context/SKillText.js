import { ReactComponent as CSS } from '../assets/image/skills/css.svg';
import { ReactComponent as HTML } from '../assets/image/skills/html.svg';
import { ReactComponent as JS } from '../assets/image/skills/js.svg';
import { ReactComponent as REACT } from '../assets/image/skills/react.svg';
import { ReactComponent as REDUX } from '../assets/image/skills/redux.svg';
import { ReactComponent as SCSS } from '../assets/image/skills/scss.svg';
import { ReactComponent as TYPE } from '../assets/image/skills/type.svg';

export const SKILLINFORMATION = [
  {
    no: 0,
    svg: [<HTML />, <CSS />],
    name: 'HTML / CSS',
    text: [
      '기본이라고 할 수 있는 HTML/CSS를 자유자재로 구현할 수 있습니다.',
      '프로덕트에 요구되는 적절한 애니메이션을 Keyframe / transition 등을 통해 구현할 수 있습니다.',
      'SCSS 전처리기 혹은 styled-component와 같은 css-in-js를 사용할 수 있습니다.'
    ]
  },
  {
    no: 1,
    svg: [<JS />],
    name: 'JAVASCRIPT',
    text: [
      'ES6 이후의 JS를 사용하는것에 능숙합니다.',
      'JS를 사용하여 CSS보다 복잡한 애니메이션을 구현 할 수 있습니다.',
      'DOM 조작 및 이벤트 할당을 통해 인터렉티브한 프로덕트를 구현할 수 있습니다.'
    ]
  },
  {
    no: 2,
    svg: [<REACT />],
    name: 'REACT',
    text: [
      `함수형 컴포넌트 형태의 작성을 선호합니다.`,
      '라이프 사이클을 이해하여 최적의 랜더링을 통한 최고의 프로덕트를 만들고자 합니다.',
      'React Hook을 적절히 사용하여 랜더링을 제어하고 필요시 새로운 Hook을 제작 할 수 있습니다..'
    ]
  },
  {
    no: 3,
    svg: [<REDUX />],
    name: 'REDUX',
    text: [
      'Redux를 사용하여 props 복잡도를 해결하고, 스토어를 통한 프로젝트의 효율적인 상태관리를 할 수 있습니다.',
      'Redux toolkit 사용을 선호합니다. 보다 쉽고 간편하게 상태관리를 할 수 있다고 생각합니다.',
      'Redux-persist를 사용하여 storage에 데이터를 저장하고 이를 효율적으로 사용 및 관리하고자 합니다.'
    ]
  },
  {
    no: 4,
    svg: [<SCSS />],
    name: 'SCSS',
    text: [
      '변수/ 중첩/ 함수 등의 문법을 적절히 사용하여 기존 CSS를 구조화한 형태로 표현할 수 있습니다.',
      '특징을 최대한으로 살려, 가독성과 재사용성을 높여 유지보수가 쉬운 스타일시트 작성을 하고자 합니다.'
    ]
  },
  {
    no: 5,
    svg: [<TYPE />],
    name: 'TYPESCRIPT',
    text: [
      `정적코드작성 및 타입오류로 인한 에러의 문제해결이 가능합니다..`,
      'TS로 인해 코드량이 많아지고 복잡해지나, 유지보수 및 코드 퀄리티에서의 장점또한 이해하고 있습니다.'
    ]
  }
];

import styles from './introduction.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { checkScreen } from '../../function/screen';
import { useOnScreen } from '../../hook/useOnScreen';

export default function Introduction() {
  const dispatch = useDispatch();
  const ref = useRef();
  const nav = useNavigate();
  const screen = useOnScreen(ref);

  useEffect(() => {
    checkScreen(1, screen, dispatch);
  }, [screen]);

  return (
    <div className={styles['port-intro']} ref={ref}>
      <div className={styles['port-intro-section']}>
        <p className={styles['port-intro-title']}>INTRODUCTION</p>
        <p className={styles['port-intro-word']}>
          {`코드는 사용자를 위해 더 좋은 방향으로 지속적으로 발전해나갑니다.
          
          이렇게끊임없이 변화되는 코드와 함께 성장해나가려고 노력하는 신입 개발자 이상현입니다.
          무언가를 제작하는 것을 좋아했기에 코드를 사용해 생각하는 것을 
          만들어 낼 수 있는 개발에 큰 흥미를 느껴 개발자가 되고자 결심하게 되었으며,
          사용자 경험을 중시하는 마인드를 갖고 보다 정확하고 편리한 서비스를 
          제공하는 개발자가 되고자 합니다.`}
        </p>
        <button
          className={styles['port-intro-button']}
          onClick={() => {
            nav('/sec');
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

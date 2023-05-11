import { useRef } from 'react';
import styles from './hidden.module.css';

export default function Hidden() {
  return (
    <div className={styles['hidden']}>
      <div className={styles['hidden-title']}>
        <p>
          {'코드는 사용자를 위해\n더 좋은 방향으로 지속적으로\n발전해나갑니다.'}
        </p>
      </div>
      <div className={styles['hidden-img']}>
        <div></div>
      </div>
      <div className={styles['hidden-intro']}>
        <p>{`이렇게끊임없이 변화되는 코드와 함께 성장해나가려고 노력하는 신입 개발자 이상현입니다.\n무언가를 제작하는 것을 좋아했기에 코드를 사용해 생각하는 것을 만들어 낼 수 있는\n개발에 큰 흥미를 느껴 개발자가 되고자 결심하게 되었으며, 사용자 경험을 중시하는 마인드를 갖고\n보다 정확하고 편리한 서비스를 제공하는 개발자가 되고자 합니다.`}</p>
      </div>
      <div className={styles['hidden-about']}>
        <p className={styles['hidden-about-title']}>ABOUT ME</p>
        <AboutComonent number='01' text='COMMUNICATION' />
        <AboutComonent number='02' text='CREATIVITY' />
        <AboutComonent number='03' text='GROWTHS' />
      </div>
      <div>skill</div>
      <div>contact</div>
    </div>
  );
}

function AboutComonent({ number, text }) {
  const ref = useRef();
  const onClickHandler = () => {
    console.log(ref.current.style);
  };

  return (
    <div className={styles['hidden-about-index']} onClick={onClickHandler}>
      <div ref={ref} className={styles['hidden-about-abs']}></div>
      <p className={styles['hidden-about-num']}>{number}</p>
      <p className={styles['hidden-about-text']}>{text}</p>
    </div>
  );
}

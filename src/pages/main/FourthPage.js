import { useEffect, useRef } from 'react';
import styles from './FourthPage.module.css';
import { useOnScreen } from '../../hook/useOnScreen';
import { useDispatch } from 'react-redux';
import { ReactComponent as Email } from '../../assets/image/contact/email.svg';
import { ReactComponent as Blog } from '../../assets/image/contact/blog.svg';
import { ReactComponent as Github } from '../../assets/image/contact/github.svg';
import { ContactUs } from '../../components/new/contact/contact';
import { Title } from '../../components/new/title/title';
import { checkScreen } from '../../function/screen';

export default function FourthPage() {
  const dispatch = useDispatch();
  const ref = useRef();
  const screen = useOnScreen(ref);

  useEffect(() => {
    checkScreen(4, screen, dispatch);
  }, [screen]);

  function ContactBox({ text, SVG }) {
    return (
      <div className={styles['fourthpage-big__container']}>
        <div
          className={styles['fourthpage-big__item']}
          onClick={() => {
            navigator.clipboard.writeText(text);
            alert('Copied to Users Clipboard !');
          }}
        >
          {SVG}
        </div>
        {text.includes('https') ? (
          <a href={text} className={styles['fourthpage-big__p']}>
            {text}
          </a>
        ) : (
          <p className={styles['fourthpage-big__p']}>{text}</p>
        )}
      </div>
    );
  }

  const titleStyle = {
    color: 'var(--color-white)',
    letterSpacing: '30px'
  };

  return (
    <div id='fourth' className={styles['fourthpage']}>
      <div className={styles['fourthpage-section']}>
        <div className={styles['newSec__title']}>
          <Title style={titleStyle} inputref={ref} title='<CONTACT>' />
          <hr style={{ width: '700px', margin: '30px auto' }} />
          <hr style={{ width: '400px', margin: '30px auto' }} />
        </div>
        <div className={styles['fourthpage-big']}>
          <div className={styles['fourthpage-big__svg']}>
            <ContactBox text={'francesco419@naver.com'} SVG={<Email />} />
            <ContactBox
              text={'https://github.com/francesco419'}
              SVG={<Github />}
            />
            <ContactBox
              text={'https://velog.io/@francesco419'}
              SVG={<Blog />}
            />
          </div>
          <ContactUs />
        </div>
      </div>
    </div>
  );
}

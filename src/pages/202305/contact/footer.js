import styles from './footer.module.css';
import Contact from './contact';

export default function FooterContact({ refer }) {
  const myContact = [
    {
      letter: 'E',
      text: 'francesco419@naver.com',
      bool: true
    },
    {
      letter: 'G',
      text: 'https://github.com/francesco419',
      bool: false
    },
    {
      letter: 'V',
      text: 'https://velog.io/@francesco419',
      bool: false
    }
  ];

  return (
    <div ref={refer} className={styles['hidden-contact']}>
      <p className={styles['hidden-rem']}>CONTACT</p>
      <div className={styles['hidden-contact-contact']}>
        {myContact.map((data, index) => {
          return (
            <Contact
              letter={data.letter}
              text={data.text}
              bool={data.bool}
              key={`${data.letter}_${index}`}
            />
          );
        })}
      </div>
      <div className={styles['hidden-contact-csv']}>
        <a href='./assets/portfolio/portfolio.pdf' download=''>
          download resume
        </a>
      </div>
      <p className={styles['hidden-contact-rights']}>
        2023@LeeSangHean. All Rights Reserved
      </p>
    </div>
  );
}

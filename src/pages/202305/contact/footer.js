import styles from './footer.module.css';
import Contact from './contact';
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';
import portfolio from './PortfolioPDF.pdf';

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

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('PortfolioPDF.pdf').then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'PortfolioPDF.pdf';
        alink.click();
      });
    });
  };

  return (
    <footer ref={refer} className={styles['hidden-contact']}>
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
        {/* <button onClick={onButtonClick}>download resume</button> */}
        <a
          href={portfolio}
          download='PortFolio'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button>Download resume</button>
        </a>
      </div>
      {/*       <p className={styles['hidden-contact-rights']}>
        2023@LeeSangHean. All Rights Reserved
      </p> */}
    </footer>
  );
}

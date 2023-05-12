import styles from './contact.module.css';

export default function Contact({ letter, text, bool }) {
  return (
    <div className={styles['hidden-contact-list']}>
      <p>{letter}</p>
      {bool ? <button>{text}</button> : <a href={text}>{text}</a>}
    </div>
  );
}

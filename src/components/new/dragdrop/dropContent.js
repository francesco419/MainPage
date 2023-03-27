import styles from '../../../pages/main/SecondPage.module.css';

export default function DropContent({ data }) {
  const setElement = (text) => {
    return (
      <div className={styles['secondpage-drop_element']}>
        <h1>{text}</h1>
      </div>
    );
  };

  const defaultElement = (text) => {
    return <div className={styles['secondpage-drop_extend']}>{text}</div>;
  };

  switch (data) {
    case 'commu':
      return setElement('cm');
    case 'creat':
      return setElement('ct');
    case 'grow':
      return setElement('gt');
    case 'sys':
      return setElement('st');
    default:
      return defaultElement(data);
  }
}

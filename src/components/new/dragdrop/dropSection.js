import { ReactComponent as Communiction } from '../../../assets/image/communication.svg';
import { ReactComponent as Creativity } from '../../../assets/image/creativity.svg';
import { ReactComponent as Growths } from '../../../assets/image/growth.svg';
import { ReactComponent as System } from '../../../assets/image/system.svg';
import styles from '../../../pages/main/SecondPage.module.css';
import DropBox from './dropBox';
import DragTarget from './dragTarget';

export default function DropSection() {
  return (
    <div className={styles['secondpage-section']}>
      <div className={styles['secondpage-detail']}>
        <DragTarget
          svg={<Communiction />}
          name={`<Communication>`}
          id='communication'
        />
        <DragTarget svg={<Creativity />} name={`<Creativity>`} id='create' />
        <DragTarget svg={<Growths />} name={`<Growths>`} id='growth' />
        <DragTarget svg={<System />} name={`<Systematic>`} id='system' />
      </div>
      <DropBox />
    </div>
  );
}

import OutBoxSkill from './outBoxSkill';
import { skillListSVG } from '../../context/SKillText';
import _ from 'lodash';

export default function SKillContainer() {
  return (
    <div>
      <OutBoxSkill skillContents={_.shuffle(skillListSVG)} />
    </div>
  );
}

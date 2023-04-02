import { useState } from 'react';
import styles from '../../../pages/main/SecondPage.module.css';
import DropContent from './dropContent';

export default function DropBox() {
  const [dropLayout, setDropLayout] = useState(true);
  const [dropElement, setDropElement] = useState('Drop Here');

  const dropBox = dropLayout
    ? { borderColor: 'var(--color-black)' }
    : { borderColor: 'var(--color-yellow)' };

  const dragOverHandler = (e) => {
    e.preventDefault();
  };

  const stateHandlerDropLayout = () => {
    setDropLayout((dropLayout) => !dropLayout);
  };

  const dropHandler = (e) => {
    e.preventDefault();
    stateHandlerDropLayout();
    const data = e.dataTransfer.getData('text');
    switch (data) {
      case 'communication':
        stateHandlerDropElement('commu');
        return;
      case 'create':
        stateHandlerDropElement('creat');
        return;
      case 'growth':
        stateHandlerDropElement('grow');
        return;
      case 'system':
        stateHandlerDropElement('sys');
      case 'default':
        stateHandlerDropElement('def');
      default:
        return;
    }
  };

  const dragEnterHandler = (e) => {
    stateHandlerDropLayout();
  };

  const dragLeaveHandler = (e) => {
    stateHandlerDropLayout();
  };

  const stateHandlerDropElement = (text) => {
    setDropElement((state) => text);
  };

  return (
    <div
      className={[styles['secondpage-dropArea']]}
      style={dropBox}
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropHandler(e)}
      onDragEnter={(e) => dragEnterHandler(e)}
      onDragLeave={(e) => dragLeaveHandler(e)}
    >
      <DropContent data={dropElement} />
    </div>
  );
}

import styles from '../../../pages/main/SecondPage.module.css';

export default function DragTarget({ svg, name, id }) {
  const dragStartHandler = (e, id) => {
    e.dataTransfer.setData('text', id);
  };

  const dragHandler = () => {};

  return (
    <div
      id={id}
      className={styles['secondpage-table_data']}
      draggable
      onDragStart={(e) => dragStartHandler(e, id)}
      onDrag={dragHandler}
    >
      {svg}
      <p>{name}</p>
    </div>
  );
}

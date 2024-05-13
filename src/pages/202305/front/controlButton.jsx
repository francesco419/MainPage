import styles from './front.module.css';

export default function ControlButton({ swipe, swipeHandler }) {
  return (
    <div className={styles['front_buttons']}>
      <button
        onClick={() => {
          swipeHandler(0);
        }}
        style={{ color: swipe === 0 ? '#ff4000' : '#f8f8f8' }}
      >
        1
      </button>
      <button
        onClick={() => {
          swipeHandler(1);
        }}
        style={{ color: swipe === 1 ? '#ff4000' : '#f8f8f8' }}
      >
        2
      </button>
      <button
        onClick={() => {
          swipeHandler(2);
        }}
        style={{ color: swipe === 2 ? '#ff4000' : '#f8f8f8' }}
      >
        3
      </button>
    </div>
  );
}

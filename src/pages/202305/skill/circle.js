import { useRef, useEffect } from 'react';

export default function CanvasCircle() {
  const ref = useRef();
  const contextRef = useRef();

  useEffect(() => {
    const canvas = ref.current;
    canvas.height = '500px';
    canvas.width = '400px';

    const context = canvas.getContext('2d');
    contextRef.current = context;
  }, []);

  function circle(x, y, r, dx, dy) {}

  const draw = () => {};

  return (
    <canvas
      ref={ref}
      id='myCanvas'
      onMouseOver={() => {
        console.log(1);
      }}
      /* onMouseMove={() => {
        console.log(2);
      }} */
    ></canvas>
  );
}

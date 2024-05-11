import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';

export default function Three({ model, speed, lightType }) {
  const [xy, setXY] = useState({ x: 0, y: 0 });
  const [rotate, setRotate] = useState(true);
  const ref = useRef();

  const handleMousePosition = (e) => {
    setXY({
      x: e.clientX - ref.current.getBoundingClientRect().left,
      y: e.clientY
    });
    console.warn = console.error = () => {};
    //console.log((xy.x * 13981).toString(16));
    //console.log(e.clientX);
  };

  const handleRotateStateTrue = () => {
    setRotate((rotate) => true);
  };

  const handleRotateStateFalse = () => {
    setRotate((rotate) => false);
  };

  useEffect(() => {});

  return (
    <>
      <Canvas
        ref={ref}
        onMouseMove={lightType ? null : handleMousePosition}
        style={{ cursor: 'pointer', width: '1200px' }}
        camera={{ fov: 60, near: 0.1, far: 100, position: [5, 5, 5] }}
        onMouseEnter={handleRotateStateFalse}
        onMouseLeave={handleRotateStateTrue}
      >
        <Environment preset='apartment' />
        <OrbitControls
          enableDamping
          dampingFactor={0.02}
          autoRotate={rotate}
          autoRotateSpeed={speed}
          enableZoom={false}
        />
        {lightType ? (
          <ambientLight intensity={10} color={0xffffff} />
        ) : (
          <ambientLight
            intensity={lightType ? 10 : 100}
            color={`#${(xy.x * 13981).toString(16)}`}
          />
        )}
        {model}
      </Canvas>
    </>
  );
}
{
  /* <pointLight
  color={0xff0000}
  intensity={1000}
  position={[xy.y, xy.x, 0]}
/> */
}
{
  /* <directionalLight
  color={0xffffff}
  intensity={50}
  position={[xy.x, xy.y, 0]}
/> */
}

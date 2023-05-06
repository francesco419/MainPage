import { useEffect, useState } from 'react';

export default function Paragraph() {
  const [random, setRandom] = useState(fourChars());

  useEffect(() => {
    randomMethod();
  }, []);

  function fourChars() {
    return (((1 + Math.random()) * 0x10000) | 0)
      .toString(16)
      .substring(1, 2)
      .toUpperCase();
  }

  function randomMethod() {
    setInterval(() => {
      setRandom(fourChars());
    }, 50);
  }
  return <p style={{ fontSize: '1.5rem', margin: '4rem 0' }}>{random}</p>;
}

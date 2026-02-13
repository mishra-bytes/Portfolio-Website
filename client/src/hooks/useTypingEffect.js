import { useState, useEffect } from 'react';

export function useTypingEffect(words, speed = 80, pause = 1200) {
  const [display, setDisplay] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === words.length) return;
    if (!deleting && subIndex === words[index].length) {
      setTimeout(() => setDeleting(true), pause);
      return;
    }
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }
    const timeout = setTimeout(
      () => {
        setSubIndex((val) => val + (deleting ? -1 : 1));
        setDisplay(words[index].substring(0, subIndex));
      },
      deleting ? speed / 2 : speed + Math.random() * 40
    );
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, speed, pause]);

  useEffect(() => {
    setDisplay(words[index].substring(0, subIndex));
  }, [subIndex, index, words]);

  return display;
}

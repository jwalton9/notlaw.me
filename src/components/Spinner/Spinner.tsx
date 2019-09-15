import React, { useRef, useState, useEffect, useCallback } from 'react';

import { polarToCartesian } from '../../tools/coordinates';
import { SpinnerChoice } from '../../types';

const createPath = (theta: number, i: number, offset: number) => {
  const [sx, sy] = polarToCartesian(30, theta * i + offset);
  const [ex, ey] = polarToCartesian(30, theta * (i + 1) + offset);

  return `M 40 40 L ${sx + 40} ${sy + 40} A 30 30 0 0 1 ${ex + 40} ${ey + 40} Z`;
};

interface Props {
  choices: SpinnerChoice[];
}

export const Spinner = ({ choices }: Props) => {
  const [spinning, setSpinning] = useState(false);

  const offset = useRef<number>(0);
  const time = useRef<number>();
  const animationFrame = useRef<number>();

  const theta = (2 * Math.PI) / choices.length;

  const tick = useCallback(() => {
    const t = Date.now();
    if (time.current) {
      const deltaT = t - time.current;
      offset.current = (offset.current + deltaT * 0.01) % (2 * Math.PI);
      choices.forEach(({ ref }, i) => {
        if (ref.current) {
          ref.current.setAttribute('d', createPath(theta, i, offset.current));
        }
      });
    }
    time.current = t;
    animationFrame.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    if (spinning) {
      animationFrame.current = requestAnimationFrame(tick);
    }

    return () => {
      time.current = undefined;
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [spinning]);

  return (
    <>
      <button onClick={() => setSpinning(true)}>Spin</button>
      <button onClick={() => setSpinning(false)}>Stop</button>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
        {choices.map((choice, i) => (
          <path key={choice.name} ref={choice.ref} d={createPath(theta, i, offset.current)} fill={choice.color} />
        ))}
      </svg>
    </>
  );
};

import React, { useRef, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import { polarToCartesian } from '../tools/coordinates';

const createPath = (theta, i, offset) => {
  const [sx, sy] = polarToCartesian(30, theta * i + offset);
  const [ex, ey] = polarToCartesian(30, theta * (i + 1) + offset);

  return `M 40 40 L ${sx + 40} ${sy + 40} A 30 30 0 0 1 ${ex + 40} ${ey + 40} Z`;
};

const Spinner = ({ choices }) => {
  const [spinning, setSpinning] = useState(false);

  const offset = useRef(0);
  const time = useRef(null);
  const animationFrame = useRef(null);

  const theta = (2 * Math.PI) / choices.length;

  const tick = useCallback(() => {
    const t = Date.now();
    if (time.current) {
      const deltaT = t - time.current;
      offset.current = (offset.current + deltaT * 0.01) % (2 * Math.PI);
      choices.forEach(({ ref }, i) => {
        ref.current.setAttribute('d', createPath(theta, i, offset.current));
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
      time.current = null;
      cancelAnimationFrame(animationFrame.current);
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

Spinner.propTypes = {
  choices: PropTypes.arrayOf(
    PropTypes.shape({
      ref: PropTypes.any.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Spinner;

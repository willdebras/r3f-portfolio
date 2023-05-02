import { useState } from 'react';
import './bios.css'
import useRandomInterval from '../../hooks/useRandomInterval'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

// Default color is a bright yellow
const DEFAULT_COLOR = 'hsl(50deg, 100%, 50%)';
const generateSparkle = (color = DEFAULT_COLOR) => {
  return {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    // Bright yellow color:
    color,
    size: random(10, 20),
    style: {
      // Pick a random spot in the available space
      top: random(-20, 30) + '%',
      left: random(0, 100) + '%',
      // Float sparkles above sibling content
      zIndex: 2,
    },
  }
}

const Sparkle = ({ size, color, style }) => {
  const path =
    'M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z';
  return (
    <span className='sparkleWrapper' style={style}>
      <svg className='sparkle' width={size} height={size} viewBox="0 0 68 68" fill="none">
        <path d={path} fill={color} />
      </svg>
    </span>
  );
};

  function Sparkles({ color = DEFAULT_COLOR, children, ...delegated }) {

    const [sparkles, setSparkles] = useState([]);

    const prefersReducedMotion = usePrefersReducedMotion();

    useRandomInterval(
      () => {
        const sparkle = generateSparkle(color);
        const now = Date.now();
        const nextSparkles = sparkles.filter(sp => {
          const delta = now - sp.createdAt;
          return delta < 750;
        });
        nextSparkles.push(sparkle);
        setSparkles(nextSparkles);
      },
      prefersReducedMotion ? null : 50,
      prefersReducedMotion ? null : 450
    );

    return (
      <span className='sparkleComponentWrapper'>
        {sparkles.map(sparkle => (
          <Sparkle
            key={sparkle.id}
            color={sparkle.color}
            size={sparkle.size}
            style={sparkle.style}
          />
        ))}
        <strong className='sparkleChildWrapper'>
          {children}
        </strong>
      </span>
    );
  }

  export default Sparkles;
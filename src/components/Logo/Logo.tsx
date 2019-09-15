import React from 'react';

interface Props {
  className?: string;
}

export const Logo = ({ className }: Props) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 668.38 361">
    <path d="M445.61,0H314.23a5,5,0,0,0-4.37,2.53L179.68,228.43a5,5,0,0,1-8.74,0l-27.17-46.92a5,5,0,0,0-4.36-2.52H5.05a5,5,0,0,0-4.37,7.57L99.86,358.48a5,5,0,0,0,4.37,2.52H244.4a5,5,0,0,0,4.37-2.54L450,7.55A5,5,0,0,0,445.61,0Z" />
    <path d="M119,0H251.45a5,5,0,0,1,4.31,2.48l18.1,31a5,5,0,0,1,0,5l-66.23,115a5,5,0,0,1-8.65,0L114.65,7.5A5,5,0,0,1,119,0Z" />
    <path d="M525.77,2.69,396,228a5.37,5.37,0,0,1-9.3,0l-20-34.47a5,5,0,0,0-8.66,0L291.87,308.31a5.39,5.39,0,0,0,0,5.38l25.9,44.63a5.36,5.36,0,0,0,4.64,2.68H460.22a5.37,5.37,0,0,0,4.65-2.68L667.65,8.06A5.37,5.37,0,0,0,663,0H530.42A5.38,5.38,0,0,0,525.77,2.69Z" />
  </svg>
);
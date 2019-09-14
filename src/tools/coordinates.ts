export const polarToCartesian = (r: number, theta: number): [number, number] => [
  r * Math.cos(theta),
  r * Math.sin(theta),
];

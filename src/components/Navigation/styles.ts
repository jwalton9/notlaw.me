import { css } from 'emotion';

import { colors } from '../../tokens';
import { mq } from '../../tools/mq';

const fromTablet = mq({ from: 738 });

export const nav = css`
  position: relative;
  display: flex;
  background-color: ${colors.primary};
  color: ${colors.secondary};
  padding: 10px;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  ${fromTablet('justify-content: initial')}
`;

export const logo = css`
  height: 40px;

  path {
    fill: ${colors.secondary};

    &:first-of-type {
      fill: ${colors.tertiary};
    }
  }
`;

export const links = (open: boolean) => css`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: calc(100vh - 116px);

  display: flex;
  flex-direction: column;
  align-items: center;

  clip-path: ${open ? 'circle(200% at 100% -40px)' : 'circle(0 at 100% -40px)'};
  transition: clip-path 0.5s ease-in-out;

  background: ${colors.primary};
  border-top: 2px solid ${colors.secondary};

  list-style: none;
  margin: 0;
  padding: 20px;
  font-size: 20px;

  li {
    margin-top: 20px;

    a {
      text-decoration: none;
      transition: color 0.2s;
      color: inherit;

      &:hover {
        color: ${colors.tertiary};
      }
    }
  }

  ${fromTablet(`
    display: flex;
    clip-path: none;
    position: initial;
    height: auto;
    background: none;
    border: none;
    flex-direction: row;
    padding: 0;

    li {
      margin-top: 0;
      margin-left: 20px;
    }
  `)}
`;

export const hamburger = css`
  position: relative;
  background: none;
  border: none;
  width: 30px;
  height: 25px;
  padding: 0;
  margin: 0;

  &:hover {
    cursor: pointer;
  }

  span {
    display: block;
    width: 100%;
    height: 4px;
    background: ${colors.secondary};
    position: absolute;
    transition: transform 0.2s ease-in-out;
  }

  ${fromTablet('display: none')}
`;

export const hamburger1 = (open: boolean) => css`
  top: 50%;
  transform: ${open ? 'translateY(-50%) rotate(45deg)' : 'translateY(-300%)'};
`;

export const hamburger2 = (open: boolean) => css`
  transition-property: transform, opacity;
  top: 50%;
  transform: ${open ? 'translate(100%, -50%)' : 'translateY(-50%)'};
  opacity: ${open ? 0 : 1};
`;

export const hamburger3 = (open: boolean) => css`
  top: 50%;
  transform: ${open ? 'translateY(-50%) rotate(-45deg)' : 'translateY(200%)'};
`;

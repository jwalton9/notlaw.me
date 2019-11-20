import { css } from 'emotion';

export const nav = css`
  position: fixed;
  display: flex;
  top: 0;
  right: 0;
  left: 0;
  padding: 1rem 2rem;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
`;

export const logo = css`
  height: 1.5rem;

  path {
    fill: #fff;

    &:first-of-type {
      fill: #ddd;
    }
  }
`;

export const links = css`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;

  li {
    padding: 0 1rem;
    a {
      text-transform: uppercase;
      color: inherit;
      text-decoration: none;
    }
  }
`;

export const social = css`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;

  li {
    padding: 0 0.25rem;
  }

  svg {
    height: 1.5rem;
    fill: #fff;
  }
`;

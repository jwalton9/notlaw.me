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
`;

export const logo = css`
  height: 2rem;

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

  li a {
    text-transform: uppercase;
    color: inherit;
    text-decoration: none;
  }
`;

export const social = css`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;

  li {
    margin: 0 0.5rem;
  }

  svg {
    height: 2rem;
    fill: #fff;
  }
`;

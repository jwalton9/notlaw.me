import { css } from 'emotion';

import { colors } from '../../tokens';

export const footer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.primary};
  padding: 10px;
  color: ${colors.secondary};
  white-space: nowrap;
  flex-wrap: wrap;
`;
export const social = css`
  float: right;
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;

  svg {
    height: 30px;
    fill: ${colors.secondary};
    transition: fill 0.2s ease-in-out;

    &:hover {
      fill: ${colors.tertiary};
    }
  }

  li:first-of-type svg {
    padding: 2.5px;
  }
`;

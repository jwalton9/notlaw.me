import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo';

import * as styles from './styles'

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(() => setOpen(state => !state), [setOpen]);

  return (
    <header className={styles.nav}>
      <Link to="/">
        <Logo className={styles.logo} />
      </Link>
      <button className={styles.hamburger} onClick={handleClick}>
        <span className={styles.hamburger1(open)}></span>
        <span className={styles.hamburger2(open)}></span>
        <span className={styles.hamburger3(open)}></span>
      </button>
      <ul className={styles.links(open)}>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
      </ul>
    </header>
  );
};

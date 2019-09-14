import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import Logo from './Logo';

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(() => setOpen(state => !state), [setOpen]);

  return (
    <header className="nav">
      <Link to="/">
        <Logo className="nav-logo" />
      </Link>
      <button className={cx('hamburger', { open })} onClick={handleClick}>
        <span className="hamburger-1"></span>
        <span className="hamburger-2"></span>
        <span className="hamburger-3"></span>
      </button>
      <ul className={cx('nav-links', { open })}>
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

export default Navigation;

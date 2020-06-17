import Link from 'next/link';

import Logo from '../Logo';

import styles from './Navigation.module.scss';

export const Navigation: React.FC = () => (
  <header className={styles.nav}>
    <div className="o-container u-text-eta">
      <ul className={styles.links}>
        <li>
          <Link href="/">
            <a>
              <Logo className={styles.logo} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        {/* 
      <li>
      <Link to="/about">About Me</Link>
      </li>
      <li>
      <Link to="/work">Work</Link>
    </li> */}
      </ul>
    </div>
  </header>
);

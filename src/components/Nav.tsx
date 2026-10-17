import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            首页
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/articles"
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            文章
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            关于我
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/subscribe"
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            订阅
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
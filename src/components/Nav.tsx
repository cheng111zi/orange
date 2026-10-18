import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import styles from './Nav.module.css';

const Nav: React.FC = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}>首页</NavLink>
        </li>
        <li>
          <NavLink to="/articles" className={({ isActive }) => (isActive ? styles.active : '')}>文章</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : '')}>关于我</NavLink>
        </li>
        <li>
          <NavLink to="/subscribe" className={({ isActive }) => (isActive ? styles.active : '')}>订阅</NavLink>
        </li>
      </ul>
      
      {/* 切换按钮 */}
      <button 
        onClick={toggleTheme} 
        style={{ 
          background: 'none', 
          border: 'none', 
          cursor: 'pointer', 
          fontSize: '1.2rem', 
          color: 'white',
          padding: '0 20px'
        }}
      >
        {isDark ? '☀️ 明亮' : '🌙 暗黑'}
      </button>
    </nav>
  );
};

export default Nav;
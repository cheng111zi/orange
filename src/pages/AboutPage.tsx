import React from 'react';
import reactSvg from '../assets/react.svg';
import styles from './SimplePage.module.css';

const AboutPage: React.FC = () => {
  return (
    <main className={styles.page}>
      <h1>关于我</h1>
      <img src={reactSvg} alt="头像" className={styles.avatar} />
      <p>你好！我是张三，一名全栈开发工程师。</p>
      <p>我热爱分享技术，这个博客用来记录我的学习笔记和技术心得。</p>
      <p>欢迎通过以下方式联系我：</p>
      <ul>
        <li>GitHub: @zhangsan</li>
        <li>Twitter: @zhangsan</li>
        <li>Email: zhangsan@example.com</li>
      </ul>
    </main>
  );
};

export default AboutPage;
import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import reactSvg from '../assets/lu.png';

interface SidebarProps {
  now: Date;
  onSubscribe: (email: string) => void; // 接收一个函数作为 prop
}

const Sidebar: React.FC<SidebarProps> = ({ now, onSubscribe }) => {
  // 用 state 保存输入框里的邮箱
  const [email, setEmail] = useState('');

  // 表单提交时调用
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();       // 阻止表单默认的"刷新页面"行为
    if (!email) return;       // 空邮箱就不处理
    onSubscribe(email);       // 调父组件传下来的函数，把邮箱"上报"
    setEmail('');             // 清空输入框
  };

  return (
    <aside className={styles.sidebar}>
      <section className={styles.widget}>
        <h3>关于作者</h3>
        <div className={styles.authorInfo}>
          <img src={reactSvg} alt="张三" className={styles.avatar} />
          <p>张三，全栈开发工程师，热爱分享技术。拥有 5 年一线大厂经验，目前专注于前端工程化与性能优化。</p>
        </div>
      </section>

      <section className={`${styles.widget} ${styles.clockWidget}`}>
        <p className={styles.clock}>当前时间：{now.toLocaleTimeString()}</p>
      </section>

      <section className={styles.widget}>
        <h3>关注我</h3>
        <ul className={styles.socialLinks}>
          <li><a href="#" aria-label="GitHub">GitHub</a></li>
          <li><a href="#" aria-label="Twitter">Twitter</a></li>
          <li><a href="#" aria-label="LinkedIn">LinkedIn</a></li>
        </ul>
      </section>

      <section className={`${styles.widget} ${styles.ctaWidget}`}>
        <h3>订阅更新</h3>
        <p>获取最新的文章和技术干货，每周发送一次，随时退订。</p>
        <form className={styles.subscribeForm} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="你的邮箱"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">订阅</button>
        </form>
      </section>
    </aside>
  );
};

export default Sidebar;
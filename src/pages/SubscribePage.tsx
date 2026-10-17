import React from 'react';
import styles from './SimplePage.module.css';

const SubscribePage: React.FC = () => {
  return (
    <main className={styles.page}>
      <h1>订阅更新</h1>
      <p>订阅后，你能第一时间收到我最新发布的文章。</p>
      <p>每周一封，绝不打扰，随时可退订。</p>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          alert('订阅成功！');
        }}
      >
        <input type="email" placeholder="你的邮箱" required />
        <button type="submit">订阅</button>
      </form>
    </main>
  );
};

export default SubscribePage;
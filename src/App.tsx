import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import styles from './App.module.css';
import { ThemeContext } from './contexts/ThemeContext';

const App: React.FC = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (email: string) => {
    console.log('收到订阅邮箱：', email);
    alert(`订阅成功！确认邮箱：${email}`);
  };

  // 定义主题数据，也可以让用户切换（这里先写死一个紫色）
  const theme = { primaryColor: '#9b59b6' };

  return (
    // 用 Provider 包裹整个页面，把 theme 数据"广播"出去
    <ThemeContext.Provider value={theme}>
      <div className={styles.pageLayout}>
        <Header />
        <Nav />
        <MainContent />
        <Sidebar now={now} onSubscribe={handleSubscribe} />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
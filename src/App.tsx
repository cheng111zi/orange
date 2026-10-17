import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import ArticleListPage from './pages/ArticleListPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import AboutPage from './pages/AboutPage';
import SubscribePage from './pages/SubscribePage';
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

  const theme = { primaryColor: '#9b59b6' };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={styles.pageLayout}>
        <Header />
        <Nav />

        {/* 中间区域：随 URL 变化 */}
        <div className={styles.contentArea}>
          <Routes>
            <Route path="/" element={<ArticleListPage />} />
            <Route path="/articles" element={<ArticleListPage />} />
            <Route path="/articles/:id" element={<ArticleDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/subscribe" element={<SubscribePage />} />
          </Routes>
        </div>

        <Sidebar now={now} onSubscribe={handleSubscribe} />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
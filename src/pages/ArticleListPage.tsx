import React, { useContext, useState, useEffect } from 'react';
// 👇 引入 useLocation 和 Link
import { Link, useLocation } from 'react-router-dom';
import { articles } from '../data/articles';
import { ThemeContext } from '../contexts/ThemeContext';
import styles from './ArticleListPage.module.css';

const ArticleListPage: React.FC = () => {
  const theme = useContext(ThemeContext);
  const location = useLocation();

  // 👇 新增状态，保存当前选中的标签
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // 👇 监听路由 state 的变化
  useEffect(() => {
    // 如果从详情页带过来了标签，就设置当前标签
    if (location.state && (location.state as any).filterTag) {
      setActiveTag((location.state as any).filterTag);
    } else {
      setActiveTag(null);
    }
  }, [location.state]);

  // 👇 根据标签过滤文章列表
  const filteredArticles = activeTag 
    ? articles.filter(article => article.tags.includes(activeTag))
    : articles;

  return (
    <main className={styles.main}>
      {/* 👇 显示当前过滤状态并提供清除按钮 */}
      {activeTag && (
        <div style={{ 
          marginBottom: '20px', padding: '10px 15px', 
          background: 'rgba(255, 255, 255, 0.8)', 
          borderRadius: '8px', display: 'flex', alignItems: 'center' 
        }}>
          当前正在查看标签：<strong style={{ color: theme.primaryColor, margin: '0 10px' }}>{activeTag}</strong>
          <button 
            onClick={() => setActiveTag(null)}
            style={{ 
              cursor: 'pointer', background: '#e74c3c', color: 'white', 
              border: 'none', padding: '4px 10px', borderRadius: '4px' 
            }}
          >
            清除过滤
          </button>
        </div>
      )}

      {/* 👇 渲染过滤后的文章列表 */}
      {filteredArticles.length > 0 ? (
        filteredArticles.map((article) => (
          <article key={article.id} className={styles.article}>
            <header className={styles.articleHeader}>
              <Link to={`/articles/${article.id}`} className={styles.titleLink}>
                <h2>{article.title}</h2>
              </Link>
              <p>
                发布于 <time dateTime={article.date}>{article.date}</time> by{' '}
                {article.author}
              </p>
            </header>

            <section className={styles.section}>
              <p>{article.content}</p>
            </section>

            <footer className={styles.articleFooter}>
              <p>
                标签:{' '}
                {article.tags.map((tag, index) => (
                  <React.Fragment key={tag}>
                    {/* 👇 改成 Link 并携带 state */}
                    <Link 
                      to="/articles" 
                      state={{ filterTag: tag }} 
                      style={{ color: theme.primaryColor, textDecoration: 'none' }}
                    >
                      {tag}
                    </Link>
                    {index < article.tags.length - 1 && ', '}
                  </React.Fragment>
                ))}
              </p>
              <Link to={`/articles/${article.id}`} className={styles.readMore}>
                阅读全文 →
              </Link>
            </footer>
          </article>
        ))
      ) : (
        <div style={{ padding: '20px', background: 'white', borderRadius: '8px' }}>
          没有找到带有 <strong>{activeTag}</strong> 标签的文章。
        </div>
      )}

      <div className={styles.highlightCta}>
        <p>
          <mark className={styles.mark}>🔥 热门教程：</mark>{' '}
          想要掌握更多前端技巧？
          <Link to="/subscribe">点击这里订阅我的 newsletter</Link>，每周推送干货！
        </p>
      </div>
    </main>
  );
};

export default ArticleListPage;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { ThemeContext } from '../contexts/ThemeContext';
import styles from './ArticleListPage.module.css';

const ArticleListPage: React.FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <main className={styles.main}>
      {articles.map((article) => (
        <article key={article.id} className={styles.article}>
          <header className={styles.articleHeader}>
            {/* 标题本身也是链接，点击进详情 */}
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
                  <a href="#" style={{ color: theme.primaryColor }}>
                    {tag}
                  </a>
                  {index < article.tags.length - 1 && ', '}
                </React.Fragment>
              ))}
            </p>
            <Link to={`/articles/${article.id}`} className={styles.readMore}>
              阅读全文 →
            </Link>
          </footer>
        </article>
      ))}

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
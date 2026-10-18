import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArticleById } from '../data/articles';
import { ThemeContext } from '../contexts/ThemeContext';
import styles from './ArticleDetailPage.module.css';

const ArticleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const theme = useContext(ThemeContext);

  const article = id ? getArticleById(Number(id)) : undefined;

  if (!article) {
    return (
      <main className={styles.main}>
        <h2>文章不存在</h2>
        <Link to="/articles">← 返回文章列表</Link>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <Link to="/articles" className={styles.backLink}>
        ← 返回文章列表
      </Link>

      <article className={styles.article}>
        <header className={styles.articleHeader}>
          <h1>{article.title}</h1>
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
                {/* 👇 改成 Link 并携带 state 跳回列表页 */}
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
        </footer>
      </article>
    </main>
  );
};

export default ArticleDetailPage;
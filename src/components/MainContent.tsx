import React, { useContext } from 'react';
import styles from './MainContent.module.css';
import { ThemeContext } from '../contexts/ThemeContext';

// 定义文章的类型
interface Article {
  id: number;
  title: string;
  date: string;
  author: string;
  tags: string[];
  content: string;
}

// 明确声明 articles 的类型
const articles: Article[] = [
  {
    id: 1,
    title: '理解 JavaScript 闭包',
    date: '2030-08-10',
    author: '张三',
    tags: ['JavaScript', '前端'],
    content:
      '闭包是指有权访问另一个函数作用域中的变量的函数。创建闭包的常见方式是在一个函数内部创建另一个函数。',
  },
  {
    id: 2,
    title: 'CSS Grid 入门',
    date: '2030-08-15',
    author: '张三',
    tags: ['CSS', '布局'],
    content: 'Grid 是二维布局系统，可同时处理行和列...（省略具体内容）',
  },
];

const MainContent: React.FC = () => {
  // 从 Context 里取出 theme
  const theme = useContext(ThemeContext);

  return (
    <main className={styles.main}>
      {articles.map((article) => (
        <article key={article.id} className={styles.article}>
          <header className={styles.articleHeader}>
            <h2>{article.title}</h2>
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
              {article.tags.map((tag: string, index: number) => (
                <React.Fragment key={tag}>
                  {/* 用 Context 里的主题色 */}
                  <a href="#" style={{ color: theme.primaryColor }}>
                    {tag}
                  </a>
                  {index < article.tags.length - 1 && ', '}
                </React.Fragment>
              ))}
            </p>
          </footer>
        </article>
      ))}

      <div className={styles.highlightCta}>
        <p>
          <mark className={styles.mark}>🔥 热门教程：</mark>{' '}
          想要掌握更多前端技巧？
          <a href="#">点击这里订阅我的 newsletter</a>，每周推送干货！
        </p>
      </div>
    </main>
  );
};

export default MainContent;
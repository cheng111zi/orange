export interface Article {
  id: number;
  title: string;
  date: string;
  author: string;
  tags: string[];
  content: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: '理解 JavaScript 闭包',
    date: '2030-08-10',
    author: '张三',
    tags: ['JavaScript', '前端'],
    content:
      '闭包是指有权访问另一个函数作用域中的变量的函数。创建闭包的常见方式是在一个函数内部创建另一个函数。闭包常用于模块化、数据私有化、函数柯里化等场景。',
  },
  {
    id: 2,
    title: 'CSS Grid 入门',
    date: '2030-08-15',
    author: '张三',
    tags: ['CSS', '布局'],
    content: 'Grid 是二维布局系统，可同时处理行和列，比 Flex 更适合做整体页面布局。',
  },
  {
    id: 3,
    title: 'React Hooks 入门',
    date: '2030-08-20',
    author: '张三',
    tags: ['React', '前端'],
    content: 'Hooks 让你在不写 class 的情况下使用 state 和其他 React 特性。',
  },
];

// 按 id 查找文章
export function getArticleById(id: number): Article | undefined {
  return articles.find((a) => a.id === id);
}
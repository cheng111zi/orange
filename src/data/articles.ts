export interface Article {
  id: number;
  title: string;
  date: string;
  author: string;
  tags: string[];
  content: string;
}

// src/data/articles.ts
export const articles = [
  // ... 保留你原来的文章 ...
  {
    id: 1,
    title: '理解 JavaScript 闭包',
    date: '2030-08-10',
    author: '张三',
    content: '闭包是指有权访问另一个函数作用域中的变量的函数。创建闭包的常见方式是在一个函数内部创建另一个函数。',
    tags: ['JavaScript', '前端'],
  },
  {
    id: 2,
    title: 'CSS Grid 入门',
    date: '2030-08-15',
    author: '张三',
    content: 'Grid 是二维布局系统，可同时处理行和列，比 Flex 更适合做整体页面布局。',
    tags: ['CSS', '前端', '布局'],
  },
  {
    id: 3,
    title: 'React Hooks 入门',
    date: '2030-08-20',
    author: '张三',
    content: 'Hooks 让你在不写 class 的情况下使用 state 和其他 React 特性。',
    tags: ['React', '前端'],
  },
  // 👇 下面是我们新加的文章，用来测试标签
  {
    id: 4,
    title: 'Vue 3 组合式 API 详解',
    date: '2030-08-25',
    author: '张三',
    content: 'Vue 3 引入了 setup 语法糖和 ref、reactive 等响应式 API，让代码组织更灵活。',
    tags: ['Vue', '前端'],
  },
  {
    id: 5,
    title: 'TypeScript 基础类型体操',
    date: '2030-08-28',
    author: '张三',
    content: '通过泛型、联合类型和交叉类型，TypeScript 可以帮我们构建非常严谨的类型系统。',
    tags: ['TypeScript', '前端'],
  },
  {
    id: 6,
    title: 'Node.js 性能优化实践',
    date: '2030-09-01',
    author: '张三',
    content: '在服务端，利用 cluster 模块和缓存机制可以显著提升 Node.js 应用的吞吐量。',
    tags: ['Node.js', '后端'],
  },
];

// 按 id 查找文章
export function getArticleById(id: number): Article | undefined {
  return articles.find((a) => a.id === id);
}
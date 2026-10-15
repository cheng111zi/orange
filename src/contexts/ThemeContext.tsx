import { createContext } from 'react';

// 定义 Context 里存的数据结构
interface Theme {
  primaryColor: string;
}

// 创建 Context，默认值给一个蓝色的主题
export const ThemeContext = createContext<Theme>({
  primaryColor: '#3498db',
});
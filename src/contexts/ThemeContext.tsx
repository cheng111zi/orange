// 1. 把 ReactNode 从大括号里拿出来，改成默认导入 React
import React, { createContext, useState, useEffect } from 'react';

interface Theme {
  primaryColor: string;
  isDark: boolean;
  toggleTheme: () => void;
}

// 把默认值改成你的紫色 #9b59b6
export const ThemeContext = createContext<Theme>({
  primaryColor: '#9b59b6',
  isDark: false,
  toggleTheme: () => {},
});

// 2. 这里的参数类型改成 React.ReactNode
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    // 这里保留你的紫色
    <ThemeContext.Provider value={{ primaryColor: '#9b59b6', isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import './index.css'

// 移动端适配
// 除视口的宽度就是多少rem，习惯设置/750
document.documentElement.style.fontSize = 100 / 750 + 'vw'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App></App>
  </React.StrictMode>
);


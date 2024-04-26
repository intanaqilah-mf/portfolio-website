// CodeBlock.js
import { useEffect } from 'react';
import hljs from 'highlight.js';
import './globals.css';
import 'highlight.js/styles/vs.css'; // Assuming you want to keep the VS Code style

const CodeBlock = ({ language, children, darkMode }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <pre className={darkMode ? 'code-block-dark' : ''}>
      <code className={`language-${language}`}>
        {children}
      </code>
    </pre>
  );
};

export default CodeBlock;

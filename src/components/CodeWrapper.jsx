import React, { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { code } from '../data'; // Import the code from data.js
import './CodeWrapper.css';

const CodeWrapper = () => {
  const [codeText, setCodeText] = useState('');

  useEffect(() => {
    // Add non-breaking spaces to the beginning of each line to push the text 15% to the right
    const indentedCode = code[0].text.split('\n').map(line => '\u00A0'.repeat(15) + line).join('\n');
    setCodeText(indentedCode); // Set the indented code text
  }, []);

  const formatLineNumber = (lineNumber) => {
    return '\u00A0'.repeat(15) + lineNumber.toString().padStart(2, '0');
  };

  return (
    <SyntaxHighlighter
      language="python"
      style={coy}
      showLineNumbers
      wrapLines
      lineProps={(lineNumber) => ({
        className: 'code-line',
        style: { display: 'flex', width: '100%' },
        children: (
          <>
            <span className="line-number">{formatLineNumber(lineNumber)}</span>
            <span>{'\u00A0'.repeat(15)}{lineNumber.content}</span>
          </>
        ),
      })}
    >
      {codeText}
    </SyntaxHighlighter>
  );
};

export default CodeWrapper;
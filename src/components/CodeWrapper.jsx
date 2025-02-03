import React, { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { ghcolors } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { code } from '../data'; // Import the code from data.js
import './CodeWrapper.css';

const CodeWrapper = () => {
    const [codeText, setCodeText] = useState('');
    const [hoveredLine, setHoveredLine] = useState(null);

    useEffect(() => {
        // Add non-breaking spaces to the beginning of each line to push the text 15% to the right
        const indentedCode = code[0].text.split('\n').map(line => '\u00A0'.repeat(15) + line).join('\n');
        setCodeText(indentedCode); // Set the indented code text
    }, []);

    const formatLineNumber = (lineNumber) => {
        return '\u00A0'.repeat(15) + lineNumber.toString().padStart(2, '0');
    };

    const specificLines = [9,17,24,]; // Add the specific lines you want to apply multi-line hover effect

    return (
        <SyntaxHighlighter
            language="python"
            style={ghcolors}
            showLineNumbers
            wrapLines
            lineProps={(lineNumber) => ({
                className: `code-line ${hoveredLine && (lineNumber === hoveredLine || (specificLines.includes(hoveredLine) && lineNumber >= hoveredLine && lineNumber <= hoveredLine + 2)) ? 'hovered' : ''}`,
                style: { display: 'flex', width: '100%' },
                onMouseEnter: () => setHoveredLine(lineNumber),
                onMouseLeave: () => setHoveredLine(null),
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
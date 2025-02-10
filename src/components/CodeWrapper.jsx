import React, { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { code } from '../data'; // Import the code from data.js
import './CodeWrapper.css';

const customTheme = {
    'code[class*="language-"]': {
        color: '#d4d4d4',
        background: 'none',
        fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
        fontSize: '1em',
        textAlign: 'left',
        whiteSpace: 'pre',
        wordSpacing: 'normal',
        wordBreak: 'normal',
        wordWrap: 'normal',
        lineHeight: '1.5',
        tabSize: '4',
        hyphens: 'none',
        fontWeight: 'bold'

    },
    'pre[class*="language-"]': {
        color: '#d4d4d4',
        background: '#14121c',
        fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
        fontSize: '2em',
        textAlign: 'left',
        whiteSpace: 'pre',
        wordSpacing: 'normal',
        wordBreak: 'normal',
        wordWrap: 'normal',
        lineHeight: '1.5',
        tabSize: '4',
        hyphens: 'none',
        padding: '1em',
        overflow: 'auto',
        fontWeight: 'bold'
    },
    'comment': { color: '#322d47' },
    'keyword': { color: '#5218cb' },
    'string': { color: '#21c035' },
    'function': { color: '#ebfc30' },
    'variable': { color: '#9cdcfe' },
    'number': { color: '#b5cea8' },
    'operator': { color: '#e3244c' },
    'punctuation': { color: '#d4d4d4' },
    'class-name': { color: '#ebfc30' },
    'attr-name': { color: '#9cdcfe' },
    'boolean': { color: '#569cd6' },
    'property': { color: '#dcdcaa' }
};

const CodeWrapper = () => {
    const [codeText, setCodeText] = useState('');
    const [hoveredLine, setHoveredLine] = useState(null);

    useEffect(() => {
        // Add dots with spaces to the beginning of each line to push the text to the right based on indentation level
        const indentedCode = code[0].text.split('\n').map(line => {
            const indentationLevel = line.search(/\S|$/); // Find the first non-whitespace character
            return '. '.repeat(indentationLevel) + line.trim();
        }).join('\n');
        setCodeText(indentedCode); // Set the indented code text
    }, []);

    const formatLineNumber = (lineNumber) => {
        return '. '.repeat(15) + lineNumber.toString().padStart(2, '0');
    };

    const specificLines = [9, 17, 24]; // Add the specific lines you want to apply multi-line hover effect

    return (
        <SyntaxHighlighter
            language="python"
            style={customTheme}
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
                        <span className="line-content">{'. '.repeat(15)}{lineNumber.content}</span>
                    </>
                ),
            })}
        >
            {codeText}
        </SyntaxHighlighter>
    );
};

export default CodeWrapper;
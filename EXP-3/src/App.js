import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [memory, setMemory] = useState(0);
  const [theme, setTheme] = useState('light');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Invalid Input');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  const handleMemoryStore = () => {
    setMemory(parseFloat(result));
  };

  const handleMemoryRecall = () => {
    setInput((prev) => prev + memory);
  };

  const handleMemoryClear = () => {
    setMemory(0);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleKeyPress = (e) => {
    if (/[0-9/*+-.]/.test(e.key)) {
      handleClick(e.key);
    } else if (e.key === 'Enter') {
      calculateResult();
    } else if (e.key === 'Backspace') {
      handleBackspace();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  });

  return (
    <div className={`calculator ${theme}`}>
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button onClick={clearInput}>C</button>
        <button onClick={handleBackspace}>⌫</button>
        <button onClick={toggleTheme}>🌗</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={handleMemoryStore}>MS</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={handleMemoryRecall}>MR</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={handleMemoryClear}>MC</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('%')}>%</button>
        <button className="equal" onClick={calculateResult}>=</button>
      </div>
    </div>
  );
}

export default App;

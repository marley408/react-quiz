import React from 'react';
import Start from './components/Start';
import { QuizProvider } from './components/QuizContext';
import './App.css';

function App() {
  return (
    <QuizProvider>
      <div className='App'>
        <Start />
      </div>
    </QuizProvider>
  );
}

export default App;

import React, { useState, useContext } from 'react';
import Start from './Start';
import { QuizContext } from './QuizContext';

const Score = () => {
  const context = useContext(QuizContext);
  const setScore = context.setScore;
  const score = context.score;
  const setIsStartBtnClicked = context.setIsStartBtnClicked;

  const [isRestartClicked, setIsRestartClicked] = useState(false);

  const restartBtn = () => {
    setIsRestartClicked(true);
  };

  if (isRestartClicked === true) {
    setScore(null);
    setIsStartBtnClicked(false);
    return <Start />;
  }
  return (
    <div className='container'>
      <div id='score-container'>
        <div id='score-header'>Score:</div>
        <div id='score'>{score} out of 10</div>
      </div>
      <div className='controls'>
        <button onClick={restartBtn} id='restart-btn' className='restart-btn '>
          Restart
        </button>
      </div>
    </div>
  );
};

export default Score;

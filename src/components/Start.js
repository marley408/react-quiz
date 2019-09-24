import React, { useContext } from 'react';
import { QuizContext } from './QuizContext';
import Question from './Question';

const Start = () => {
  const context = useContext(QuizContext);
  const setIsStartBtnClicked = context.setIsStartBtnClicked;
  const isStartBtnClicked = context.isStartBtnClicked;

  const startBtn = e => {
    e.preventDefault();

    setIsStartBtnClicked(true);
  };

  if (isStartBtnClicked === true) {
    return <Question />;
  }

  return (
    <div className='container'>
      <div id='score-container'>
        <div className='controls'>
          <button onClick={startBtn} id='start-btn' className='restart-btn '>
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;

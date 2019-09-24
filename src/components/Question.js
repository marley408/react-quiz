import React, { useState, useContext } from 'react';
import { QuizContext } from './QuizContext';
import Score from './Score';

const questions = [
  {
    id: 1,
    question: 'Which one is not a Hook?',
    answer_a: 'useState()',
    answer_b: 'useConst()',
    answer_c: 'useReducer()',
    answer_d: 'All of the above',
    correct_answer: 'b'
  },
  {
    id: 2,
    question: 'What Hook should be used for data fetching?',
    answer_a: 'useDataFetching()',
    answer_b: 'useApi()',
    answer_c: 'useEffect()',
    answer_d: 'useRequest()',
    correct_answer: 'c'
  }
];

const Question = () => {
  const context = useContext(QuizContext);
  const setScore = context.setScore;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  console.log(currentQuestion);

  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  let question = questions[currentQuestion];
  console.log(question);

  const nextQuestion = e => {
    e.preventDefault();

    setCurrentQuestion(currentQuestion => currentQuestion + 1);
  };

  const submitBtn = () => {
    setIsSubmitClicked(true);
  };

  if (isSubmitClicked === true) {
    return <Score />;
  }

  return (
    <div className='container'>
      <div id='question-container'>
        <div id='question'>{question.question}</div>
        <div id='answer-buttons' className='btn-grid'>
          <button className='btn'>{question.answer_a}</button>
          <button className='btn'>{question.answer_b}</button>
          <button className='btn'>{question.answer_c}</button>
          <button className='btn'>{question.answer_d}</button>
        </div>
      </div>
      <div className='controls'>
        {currentQuestion < 1 ? (
          <button
            onClick={nextQuestion}
            id='next-btn'
            className='next-btn hide'
          >
            Next
          </button>
        ) : (
          <button
            onClick={submitBtn}
            id='restart-btn'
            className='restart-btn btn'
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Question;

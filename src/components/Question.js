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
    correct_answer: 'useConst()'
  },
  {
    id: 2,
    question: 'What Hook should be used for data fetching?',
    answer_a: 'useDataFetching()',
    answer_b: 'useApi()',
    answer_c: 'useEffect()',
    answer_d: 'useRequest()',
    correct_answer: 'useEffect()'
  }
];

const Question = () => {
  const context = useContext(QuizContext);
  const setScore = context.setScore;
  const score = context.score;

  const [captureAnswer, setCaptureAnswer] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  let question = questions[currentQuestion];

  const handleSelectedAnswer = e => {
    setCaptureAnswer(e.target.value);

    setIsDisabled(true);
  };

  const nextQuestion = e => {
    e.preventDefault();
    setIsDisabled(false);
    // if no answer selected user cant proceed
    if (captureAnswer === '') {
      return alert('You must select an answer');
    }

    if (captureAnswer === question.correct_answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion => currentQuestion + 1);
    setCaptureAnswer('');
  };

  const submitBtn = () => {
    // if no answer selected user cant proceed

    if (captureAnswer === '') {
      return alert('You must select an answer');
    }
    setIsSubmitClicked(true);
    if (captureAnswer === question.correct_answer) {
      setScore(score + 1);
    }
  };

  if (isSubmitClicked === true) {
    return <Score />;
  }

  return (
    <div className='container'>
      <div id='question-container'>
        <div id='question'>{question.question}</div>
        <div id='answer-buttons' className='btn-grid'>
          <button
            onClick={handleSelectedAnswer}
            value={question.answer_a}
            className='btn'
            disabled={isDisabled}
          >
            {question.answer_a}
          </button>
          <button
            onClick={handleSelectedAnswer}
            value={question.answer_b}
            className='btn'
            disabled={isDisabled}
          >
            {question.answer_b}
          </button>
          <button
            onClick={handleSelectedAnswer}
            value={question.answer_c}
            className='btn'
            disabled={isDisabled}
          >
            {question.answer_c}
          </button>
          <button
            onClick={handleSelectedAnswer}
            value={question.answer_d}
            className='btn'
            disabled={isDisabled}
          >
            {question.answer_d}
          </button>
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

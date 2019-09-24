import React, { useState, createContext } from 'react';

// this is imported to the components that use this provider
export const QuizContext = createContext({});

// create user provider. this holds info and passes it down to
export const QuizProvider = props => {
  const [score, setScore] = useState(2);
  const [isStartBtnClicked, setIsStartBtnClicked] = useState(false);

  // need to set inital state because page will refresh after login or register
  const INITIAL_STATE = {
    score: score,
    setScore: setScore,
    isStartBtnClicked: isStartBtnClicked,
    setIsStartBtnClicked: setIsStartBtnClicked
  };

  return (
    <QuizContext.Provider value={INITIAL_STATE}>
      {props.children}
    </QuizContext.Provider>
  );
};

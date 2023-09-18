import React, { useReducer } from "react";

import { quizData } from "./quizData";

const initial = {
  currentQuestionIndex: 0,
  score: 0,
};

function reducer(state, action) {
  if (action.type === "CURRECT_ANSWER") {
    return {
      ...state,
      score: state.score + 1,
    };
  }
  if (action.type === "NEXT_QUESTION") {
    return {
      ...state,
      currentQuestionIndex: state.currentQuestionIndex + 1,
    };
  }
}

function AswerSection() {
  const [state, dispatch] = useReducer(reducer, initial);
  const currentQuestion = quizData[state.currentQuestionIndex];

  function handleAnswerClick(selectedOption) {
    if (selectedOption === currentQuestion.correctAnswer) {
      dispatch({ type: "CURRECT_ANSWER" });
    }
    dispatch({ type: "NEXT_QUESTION" });
  }
  return (
    <div>
      {currentQuestion ? (
        <div>
          <h2>{currentQuestion.question}</h2>
          <div>
            <ul>
              {currentQuestion.options.map((options, index) => (
                <li kay={index} onClick={() => handleAnswerClick(options)}>
                  {options}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div>
          <h2>Game Over</h2>
          <p>Your score : {state.score}</p>
        </div>
      )}
    </div>
  );
}

export default AswerSection;
